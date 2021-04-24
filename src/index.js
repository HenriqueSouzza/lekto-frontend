import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Auth0Provider from './providers/auth0-provider';
import ReduxProvider from './providers/redux-provider';
import Router from './router';
import './assets/css/animation.css';
import './assets/css/fontello.css';
import './assets/css/fontquiroh.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Auth0Provider>
        <ReduxProvider>
          <Router />
        </ReduxProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);