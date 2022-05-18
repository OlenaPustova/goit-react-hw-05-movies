import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import './index.scss';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter basename="/your_repo_name/">
    <App />
  </BrowserRouter>
  //</React.StrictMode>
);
