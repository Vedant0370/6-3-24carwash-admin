import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const emailToCheck = 'test@gmail.com'; // Email from the available data
    const passwordToCheck = 'test1234';   // Password from the available data
  
    if (email === emailToCheck && password === passwordToCheck) {
      // Successful login, navigate to the admin site
      window.location.href = 'https://eastwayvisa.com';
    } else {
      // Show an alert for incorrect email or password
      alert('Incorrect email or password. Please try again.');
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
