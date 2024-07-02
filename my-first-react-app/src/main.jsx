import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import Greeting from './Greeting.jsx';
import Btn from './ShowBtn.jsx';
import Test from './ShowImg.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Btn />
    <Test />
  </React.StrictMode>
);
