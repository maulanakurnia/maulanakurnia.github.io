import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
const publicIp = require('public-ip');


// Styling Console
const warningTitleCSS = 'color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;';
const warningDescCSS = 'font-size: 18px;';
console.log('%cStop!', warningTitleCSS);
console.log("%cThis is a browser feature intended for developers!!!", warningDescCSS);
(async () => { console.log("Opps, Kami berhasil mengkap Public IP Adress anda {{ ", await publicIp.v4(), " }}"); })();


ReactDOM.render(
  <Home />,
  document.getElementById('root'),

);
serviceWorker.unregister();
