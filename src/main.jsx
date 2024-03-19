import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Cambia la importación de createRoot
import { createRoot } from 'react-dom/client';

// Utiliza createRoot en lugar de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
