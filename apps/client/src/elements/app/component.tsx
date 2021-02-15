import React, { useEffect, useState } from 'react';
import style from './component.module.scss';
//import { useDispatch, useSelector } from 'react-redux';
//import { getStatus, setStatus, Status } from '../../store/slices/app';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Component = () => {
//  const dispatch = useDispatch();
//  const status = useSelector(getStatus);
  const [token, setToken] = useState(null);
  const { user, isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, getIdTokenClaims  } = useAuth0();
  useEffect(() => {
    (async () => {
        const token = await getAccessTokenSilently();
        setToken(token);
    })();
  }, [getAccessTokenSilently]);

  console.log('TOKEN')
  console.log(token)

  if (window.location.search.includes('code=')) {
    //return this.handleRedirectCallback();
    console.log('CODE')
    console.log(user);
    // const x = getToken();
    // console.log(x);

  }
  else if (!isAuthenticated && isLoading) {
    loginWithRedirect();
  }
  else {
    console.log('USER');
    console.log(user);
  }

  const send = () => {
    if (token) {
      axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
      axios.get('http://localhost:3333/api');
    }
  }

  return (
    <div className={style.container}>
      <button onClick={send}>APP ELEMENT</button>
    </div>
  );
};

export default Component;
