import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const warningTitleCSS = 'color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;';
const warningDescCSS = 'font-size: 18px;';
console.log('%cStop!', warningTitleCSS);
console.log("%cThis is a browser feature intended for developers!!!", warningDescCSS);
const publicIp = require('public-ip');
 
(async () => {
    console.log("Opps, Kami berhasil mengkap Public IP Adress anda {{ ", await publicIp.v4(), " }}");
    //=> '46.5.21.123'
 
    // console.log(await publicIp.v6());
    //=> 'fe80::200:f8ff:fe21:67cf'
})();

ReactDOM.render(
  <App />,
  document.getElementById('root'),

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
