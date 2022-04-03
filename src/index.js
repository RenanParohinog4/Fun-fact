import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"

ReactDOM.render(
  <div className="container">
    <Navbar />
    <Main />
  </div>,
  document.getElementById('root')
);



