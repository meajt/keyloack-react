import React from 'react';
import ReactDOM from 'react-dom';
import DemoApp from './DemoApp';
import AuthProvider from './AuthProvider';

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <DemoApp />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);
