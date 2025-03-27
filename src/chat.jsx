import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./common/App.css";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./common/chat.css";


const Chat = () => {
  const [conversationHistory, setConversationHistory] = useState("");
  const [userInput, setUserInput] = useState("");
  const [responseText, setResponseText] = useState("");
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // Fetch the API key from backend
    const fetchApiKey = async () => {
      try {
        const response = await axios.get("/api/config"); // Proxy ensures backend call
        setApiKey(response.data.googleApiKey); // Set the fetched API key
      } catch (error) {
        console.error("Failed to fetch API key:", error);
      }
    };
    fetchApiKey();
  }, []);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Context & instructions for AI
  let context = `You are a highly knowledgeable doctor. Based in INDIA. You provide health advice, suggest medicines (as recommendations, not prescriptions), and help with medical queries.

You can also fetch **real-time information**, such as:
- Medicine costs.
- Nearby hospitals.
- Surgery procedures.
- Latest treatments.

If real-time information is available, analyze it **before responding**.)`;

  let instructions = `Rules:
- Use bullet points, paragraphs, or tables for clarity.
- First give the main answer and what the user needs, and the additional points you have should be small and a very quick read.
- Ensure readable, structured responses.
- Do not instruct the user on what to do, you can only request for more information after you give the answers
- If the user requests any information then preferably give more than 3 answers/options wherever possible
- Do NOT use text formatting for bold etc, i.e. use of **xyz** and all, it should just be a sinple text
- If the user demands the hospitals in a certain area, first give the user the list and then ask for any other specifications;
-Example for response if prompt is something like: "Hospitals near XYZ locality", the response should be: "The top hospitals located near XYZ locality are: A, B, C. For further more detailed response specify your need." Where A,B,C are popular hospitals.
- Never include any line which is related to this "The links you provided are not relevant to the immediate situation and are about healthcare in other countries."`; 

  // Function to perform real-time Google search
  const googleSearch = async (query) => {
    try {
      const response = await axios.get("https://www.googleapis.com/customsearch/v1", {
        params: {
          key: apiKey,
          cx: process.env.REACT_APP_SEARCH_ENGINE_ID,
          q: query,
        },
      });

      if (!response.data.items) {
        return "No relevant results found.";
      }
      return response.data.items.slice(0, 3).map((item) => `- ${item.title}: ${item.link}`).join("\n");
    } catch (error) {
      console.error("Google Search Error:", error.response?.data || error.message);
      return "I couldn't fetch real-time information. Please try again later.";
    }
  };

  const needsRealTimeSearch = (input) => {
    const keywords = ["cost", "price", "medicine", "hospital", "procedure", "latest", "treatment", "near", "surgery", "availability", "find", "doctor"];
    return keywords.some((keyword) => input.toLowerCase().includes(keyword));
  };

  const handleAskQuestion = async () => {
    if (!userInput.trim()) return;

    let fullPrompt = `${conversationHistory}\nUser: ${userInput}\nAI:`;

    try {
      if (needsRealTimeSearch(userInput)) {
        const searchResults = await googleSearch(userInput);
        fullPrompt += `\nHere is the latest real-time information:\n${searchResults}\n\nNow, analyze this and provide a useful response based on the context and instructions.`;
      }

      const result = await model.generateContent(fullPrompt);
      const aiResponse = result.response.text().trim();

      setConversationHistory((prev) => `${prev}\nUser: ${userInput}\nAI: ${aiResponse}\n`);
      setResponseText(aiResponse);
      setUserInput(""); // Clear input after sending the question
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    
    <div>
    <Header/>
   
        <textarea
        placeholder="MEDICARE....YOUR PERSONALIZED AI CHATBOT" 
          className="chat-history" 
          value={conversationHistory} 
          readOnly 
          rows={15} 
        />
        
        <div className="input-container">
  <input
    type="text"
    placeholder="Type your question here..."
    value={userInput}
    onChange={(e) => setUserInput(e.target.value)}
    onKeyDown={(e) => e.key === 'Enter' && handleAskQuestion()}
    className="chat-input"
  />
  <button onClick={handleAskQuestion} id="btn-chat">
    Ask AI
  </button>
</div>
          
      <Footer/>
      </div>

   
  );
};

export default Chat;


