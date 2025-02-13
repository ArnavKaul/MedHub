import React, { useState } from "react";
import "./common/signup.css";
import { useNavigate } from "react-router-dom"; // For redirecting after signup

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [matchErr, setMatchErr] = useState(false);
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors
    setEmailErr(false);
    setPwdErr(false);
    setMatchErr(false);
    setBackendError("");

    // Frontend validation
    let valid = true;
    if (!email.includes("@")) {
      setEmailErr(true);
      valid = false;
    }
    if (password.length < 6) {
      setPwdErr(true);
      valid = false;
    }
    if (password !== confirmPassword) {
      setMatchErr(true);
      valid = false;
    }
    if (!valid) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      setBackendError(error.message);
      if (error.message.includes("already exists")) {
        setEmailErr(true);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailErr && <p className="error">Invalid email</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {pwdErr && <p className="error">Password must be at least 6 characters</p>}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {matchErr && <p className="error">Passwords do not match</p>}
          </div>

          {backendError && <p className="error">{backendError}</p>}

          <button type="submit">Signup</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;