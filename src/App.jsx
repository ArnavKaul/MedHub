// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./homepage";
import "./common/index.css";
import Login from "./login";
import Signup from "./signup";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "lucide-react";

ReactDOM.createRoot(document.getElementById("root")).render(
		<Router>
		<Routes>
		<Route path="/home" element={<Homepage />} />
		<Route path="/signup" element={<Signup />} />
		<Route path="/login" element={<Login />} />
	</Routes>
	</Router>
);
