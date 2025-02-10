import React, { useState } from "react";
import "./common/signup.css"; // Importing separate CSS file

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirmation
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);
  const [matchErr, setMatchErr] = useState(false); // Error for password mismatch

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPwdErr(false);
    setMatchErr(false); // Reset match error when typing
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setMatchErr(false); // Reset match error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailErr(true);
      return;
    }
    if (password.length < 6) {
      setPwdErr(true);
      return;
    }
    if (password !== confirmPassword) {
      setMatchErr(true);
      return;
    }

    // Proceed with signup logic if no errors
    alert("Signup Successful!");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmail} required />
            {emailErr && <p className="error">Invalid email</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={handlePassword} required />
            {pwdErr && <p className="error">Password must be at least 6 characters</p>}
          </div>

          <div className="input-group">
            <label>Enter Password Again</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPassword} required />
            {matchErr && <p className="error">Passwords do not match</p>}
          </div>

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
