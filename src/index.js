import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// A way to make react-router-dom work anywhere in your application is to wrap your App component with the HashRouter component.

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, 
document.getElementById('root'));
