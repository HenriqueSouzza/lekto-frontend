import { REQUEST_AUTH } from './actions';

function AuthReducer(state = {}, action) {
    switch (action.type) {
        case REQUEST_AUTH:
            return {...state, access_token: action.payload}
            
        default:
            return state
    }
}

export default AuthReducer;
