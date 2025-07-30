import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUP.css";

const SignUP = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    fetch("http://127.0.0.1:8000/api/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    })
      .then(async (res) => {
        if (res.ok) {
          alert("Signup successful! Please login.");
          navigate("/"); // Redirect to login page after signup
        } else {
          const data = await res.json();
          alert(
            data.username?.join(", ") ||
              data.email?.join(", ") ||
              data.password?.join(", ") ||
              "Signup failed"
          );
        }
      })
      .catch(() => alert("Network error"));
  };

  return (
    <div className="neumorphic neumorphic-card">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="neumorphic neumorphic-input"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="neumorphic neumorphic-input"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="neumorphic neumorphic-input"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirm(e.target.value)}
        className="neumorphic neumorphic-input"
      />
      <button onClick={handleSubmit} className="neumorphic neumorphic-button">
        Sign Up
      </button>
      <p>
        Already have an account?{" "}
        <Link to="/" className="colo">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUP;
