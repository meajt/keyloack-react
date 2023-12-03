import React from 'react';
import { withMsal } from 'react-aad-msal';

const ADApp = (props) => {
  const { accountInfo, instance } = props.msalContext;

  return (
    <div>
      {accountInfo ? (
        <div>
          <p>Hello, {accountInfo.account.name}!</p>
          <button onClick={() => instance.logout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => instance.login()}>Login</button>
      )}
    </div>
  );
};
const DemoApp = withMsal(ADApp);
export default DemoApp;
