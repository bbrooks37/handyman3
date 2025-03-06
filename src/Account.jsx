// src/Account.jsx
import React from 'react';
import { auth } from './firebase'; // Make sure this path is correct
import { useAuthState } from 'react-firebase-hooks/auth';
import Slideshow from './Slideshow';

function Account() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>Please log in to view your account.</p>;
  }

  return (
    <div>
      <h2>Account Details</h2>
      <p><strong>Email:</strong> {user.email}</p> {/* Email display */}

      {/* Slideshow */}
      <h3>Our Work</h3>
      <Slideshow />
    </div>
  );
}

export default Account;