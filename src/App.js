import React, {useEffect} from 'react';
import Template from './components/template/index';
import { useAuth0 } from "@auth0/auth0-react";
import {generateTokenAuth} from './pages/auth/actions';

export default function App(props) {

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    generateTokenAuth(getAccessTokenSilently)
  }, []);

  return isAuthenticated && <Template {...props}/>

}
