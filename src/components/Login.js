import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://car-wash-backend-api.onrender.com/api/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login
        window.location.href = 'https://car-wash-admin-site.onrender.com';
      } else {
        // Handle unsuccessful login
        const errorData = await response.json();

        if (errorData.message) {
          alert(`Error: ${errorData.message}`);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
    <h1 className='heading-admin'>Welcome To Admin Dashboard</h1>
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
