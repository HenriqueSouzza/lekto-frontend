import { combineReducers } from 'redux';

import Auth from '../pages/auth/reducer';
import Home from '../pages/home/reducer';

export default combineReducers({
    Auth, Home
})