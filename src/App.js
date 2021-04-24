import React from 'react';
import { connect } from 'react-redux';
import Template from './components/template/index';
import { useAuth0 } from "@auth0/auth0-react";
import { generateTokenAuth } from './pages/auth/actions';

function App(props) {

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();


  if (!isAuthenticated) {
    props.generateTokenAuth(getAccessTokenSilently)
  }

  return isAuthenticated && <Template {...props} />

}

const mapStateToProps = (state) => ({auth: state.Auth});

export default connect(mapStateToProps, {generateTokenAuth})(App);