import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const KeyLoackApp = () => {
    const { keycloak, initialized } = useKeycloak();
  
    if (!initialized) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        {keycloak.authenticated ? (
          <div>
            <h1>Hello, {keycloak.tokenParsed.preferred_username}!</h1>
            <button onClick={() => keycloak.logout()}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Login to access this content</h1>
            <button onClick={() => keycloak.login()}>Login</button>
          </div>
        )}
      </div>
    );
  };

export default KeyLoackApp;
