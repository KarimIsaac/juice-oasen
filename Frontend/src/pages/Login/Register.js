import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return (
    <form >
      <label>
        Email:
        <input
          placeholder='email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          placeholder='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button type="submit">Register</button>

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </form>
  );
};

export default Register;
