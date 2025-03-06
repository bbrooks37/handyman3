import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Changed from App.jsx to App.js

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);