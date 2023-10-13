// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import your main App component from './App'
import App from './App';

// Create a root for rendering your React app, and specify the DOM element with the id 'root' as the rendering target
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app within React.StrictMode. This is a development mode feature of React that helps identify potential issues in your code.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
