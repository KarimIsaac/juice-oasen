import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Set email correctly
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Add onChange for password
        />
      </label>

      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </form>
  );
};

export default Login;
