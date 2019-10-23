import { combineReducers } from 'redux';
import myReducer from './reducer';
import loginReducer from './reducer-login';
import registerReducer from './reducer-register'
const mainReducer = combineReducers(
    {
        loginReducer,
        myReducer,
        registerReducer
    }
);
export default mainReducer;

