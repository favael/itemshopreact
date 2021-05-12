import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/index.css';
import MainPageTest from './MainPageTest' 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <React.StrictMode>
    <MainPageTest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();