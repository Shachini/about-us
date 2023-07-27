import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";

const homepage = process.env.PUBLIC_URL || '/';
ReactDOM.render(
  <BrowserRouter basename={homepage}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

