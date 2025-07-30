import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import './Login.css';

const Login = () => {
  const { setIsLoggedIn } = useContext(MyContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // <-- Loading state here
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // <-- Start loading before fetch

    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok && data.message?.trim().toLowerCase() === 'login successful') {
          alert(data.message);
          localStorage.setItem('isLoggedIn', 'true');  // <-- fix here, it should be "true"
          setIsLoggedIn(true);
          navigate('/home');
        } else {
          alert(data.message || 'Login failed');
        }
      })
      .catch(() => alert('Network error'))
      .finally(() => setLoading(false)); // <-- Stop loading no matter what
  };

  return (
    <div className="neumorphic neumorphic-card">
      <h1>Login</h1>

      {loading ? (
        <p>Loading...</p> // <-- show this while loading
      ) : (
        <>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="neumorphic neumorphic-input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="neumorphic neumorphic-input"
          />
          <button onClick={handleSubmit} className="neumorphic neumorphic-button">
            Sign In
          </button>
          <p>
            Don't have an account? <Link to="/signup" className="colo">Sign up</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;

