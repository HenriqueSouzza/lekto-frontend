import { REQUEST_MOMENT_HOME } from './view-moment/actions';

function HomeReducer(state = {}, action) {
    switch (action.type) {
        case REQUEST_MOMENT_HOME:
            return {...state, moment: action.payload}
            
        default:
            return state
    }
}

export default HomeReducer;
