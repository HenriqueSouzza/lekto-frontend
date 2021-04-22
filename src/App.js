import React from 'react';
import Template from './components/template/index';
import Auth from './pages/auth/index';

export default function App(props) {
  let login = 0;

  if (login) {
    return <Template {...props}/>
  } else {
    return <Auth />
  }

}
