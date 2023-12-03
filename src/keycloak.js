import Keycloak from 'keycloak-js';

const keycloakConfig = {
  realm: 'demo',
  url: 'http://localhost:8080',
  clientId: 'demo-app',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
