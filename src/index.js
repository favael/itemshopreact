import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageTest from "./MainPageTest"
import ItemDetails from './ItemDetails';
import {BrowserRouter, Route} from 'react-router-dom'
import AddItem from './AddItem';

   


ReactDOM.render(
  <BrowserRouter>
  <div>
    <AddItem/>
    {/* <Route exact path ='/' component = {MainPageTest}/>
    <Route path ='/book/:isbn' component = {ItemDetails}/> */}
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
