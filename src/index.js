import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import sw from './sw';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

sw();