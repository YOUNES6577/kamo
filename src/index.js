import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

import 'react-bootstrap/dist/react-bootstrap.min.js'
import './asset/css/index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'antd/dist/antd.min.css'

function loadFont() {
  WebFont.load({
    google: {
      families: ['Spartan', 'Spinnaker',  'Droid Sans', 'Tangerine', 'Segoe UI']
    }
  });
}
loadFont()

ReactDOM.render(
  <React.StrictMode >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
