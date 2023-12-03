import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import KeyLoackApp from './KeyLoackApp';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak  from './keycloak';
const keycloakInitOptions = {
  onLoad: 'check-sso',
};

ReactDOM.render(
  <ReactKeycloakProvider 
  authClient={keycloak}
  initOptions={keycloakInitOptions}
  >
    <React.StrictMode>
      <KeyLoackApp />
    </React.StrictMode>
  </ReactKeycloakProvider>,
  document.getElementById('root')
);
