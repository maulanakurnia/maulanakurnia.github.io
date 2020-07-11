import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/App/';
import * as serviceWorker from './serviceWorker';

// Styling Console
const warningTitleCSS = 'color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;';
const warningDescCSS = 'font-size: 18px;';
console.log('%cStop!', warningTitleCSS);
console.log("%cThis is a browser feature intended for developers!!!", warningDescCSS);


ReactDOM.render(
  <Home />,
  document.getElementById('root'),

);
serviceWorker.unregister();
