import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in');
      setSuccessMessage('Successfully logged in!');
      setEmail('');
      setPassword('');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error('Error logging in:', error);
      // You can add error handling and display an error message here if needed
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off" // Added to the input field as well
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {successMessage && (
        <div style={{ color: 'green', marginTop: '10px' }}>
          {successMessage}
        </div>
      )}
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;