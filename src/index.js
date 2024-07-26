import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

const domain = auth_config.domain;
const clientId = auth_config.clientId;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }} // Use authorizationParams instead of redirectUri
  >
    <App />
  </Auth0Provider>
);
