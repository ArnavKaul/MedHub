import React, { useState } from "react";
import "./common/login.css"; // Importing separate CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPwdErr(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailErr(true);
    }
    if (password.length < 6) {
      setPwdErr(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
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

          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
