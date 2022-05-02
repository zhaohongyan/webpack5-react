import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from './react-router-dom.index.js'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import VConsole from 'vconsole';

const vConsole = new VConsole();

console.log('location', window.location.href)
let basename = ''
if (window.location.href.indexOf('localhost') === -1) {
  basename = '/module/visitorh5'
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
