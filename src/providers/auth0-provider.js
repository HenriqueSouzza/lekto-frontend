import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const host = process.env.REACT_APP_PUBLIC_URL;

    const { history } = children.props

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || host);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={host}
            onRedirectCallback={onRedirectCallback}
            scope="read:current_user update:current_user_metadata"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;