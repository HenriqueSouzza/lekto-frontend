import axios from 'axios';

export const REQUEST_AUTH = 'REQUEST_AUTH';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;

export function generateTokenAuth(getAccessTokenSilently) {

    return async dispatch => {

        try {
            const success = await getAccessTokenSilently({ audience: `https://${domain}/api/v2/`, scope: "read:current_user" });

            axios.interceptors.request.use((config) => config.headers.authorization = success)
            
            dispatch({ type: REQUEST_AUTH, payload: success })
            
        } catch (error) {
            console.log(error)
        }

    }
}