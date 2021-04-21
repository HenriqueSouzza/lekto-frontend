import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './assets/css/animation.css';
import './assets/css/fontello.css';
import './assets/css/fontquiroh.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);