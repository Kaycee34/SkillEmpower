import React from 'react';
import ReactDOM from 'react-dom/client';  // This is for React 18
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);  // React 18 specific API

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
