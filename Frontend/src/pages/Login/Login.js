import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  
  return (
    <form >
      <label>
        Email:
        <input
        type="email" 
        value={email} 
        onChange={ (e) => setPassword(e.target.value)} />
      </label>

      <label>
        Password:
        <input type="password" 
        value={password} 
         />
      </label>

      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </form>
  );
};

export default Login;

