// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses ReactDOM.createRoot
import './App.css'; // Assuming global styles are in index.css
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
