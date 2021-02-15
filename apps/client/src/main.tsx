import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './elements/app/component';
import { Auth0Provider } from "@auth0/auth0-react";

console.log(process.env);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.NX_AUTH0_DOMAIN}
      clientId={process.env.NX_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.NX_AUTH0_AUDIENCE}
      scope={process.env.NX_AUTH0_SCOPE}
    >

    <Provider store={store}>

        <App />

    </Provider>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
