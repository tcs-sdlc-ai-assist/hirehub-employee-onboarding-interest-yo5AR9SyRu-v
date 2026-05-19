import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Built src/main.jsx, the React entry point that renders the root App component without any router or providers. To run, execute `npm run dev` (or `yarn dev`) to start the Vite development server.