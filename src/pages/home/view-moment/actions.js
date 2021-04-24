import axios from 'axios';

export const REQUEST_MOMENT_HOME = 'REQUEST_MOMENT_HOME';

const base_url_api = process.env.REACT_APP_BASE_URL_API;

export function getMomentHome(params = '') {

    return async dispatch => {
        try {

            const success = await axios.get(base_url_api);
            dispatch({ type: REQUEST_MOMENT_HOME, payload: success })

        } catch (error) {
            console.log(error)
        }
    }
}
