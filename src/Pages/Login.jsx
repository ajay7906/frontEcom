







// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';
import { login } from '../api/auth';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userData = { email, password };
      const response = await login(userData);
      console.log('Login successful:', response);
      localStorage.setItem('token', response.token); // Store the token in local storage
      setIsLoggedIn(true)
      navigate('/'); // Redirect to home page after login
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to login. Please check your credentials.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {error && <p>{error}</p>}
        </div>
        <button onClick={handleLogin}>Login</button>
        <p className='loginsignup-login'>
          Don't have an account? <Link to='/LoginSignup'>Sign up here</Link> <br />
          <Link to='/verifyotp'>Forgot Password</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
