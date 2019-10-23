import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../Actions/action-login';

let user = JSON.parse(localStorage.getItem('user'));
const initState = user ? { authenticate: true, user } : {};
function loginReducer(state = initState, action) {

    switch ( action.type) {
        case LOGIN_REQUEST: {
            return {
                authenticate: true,


            }

        }
        case LOGIN_SUCCESS: {
            return {
                authenticate: true,

            }

        }
        case LOGIN_FAILURE: {
            return {}

        }

        default: return state
    }
}

export default loginReducer;