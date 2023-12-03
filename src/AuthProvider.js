import { MsalProvider } from 'react-aad-msal';

const config = {
  auth: {
    authority: 'https://login.microsoftonline.com/your-tenant-id',
    clientId: 'your-client-id',
    redirectUri: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: true,
  },
};

const authenticationParameters = {
  scopes: ['openid', 'profile', 'api://your-api-scope/access_as_user'],
};

const options = {
  loginType: 2,
  tokenRefreshUri: window.location.origin + '/auth.html',
};

const AuthProvider = new MsalProvider(config, authenticationParameters, options);
export default  AuthProvider;