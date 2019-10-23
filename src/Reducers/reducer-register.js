
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../Actions/action-register';

let user = JSON.parse(localStorage.getItem('user'));
const initState = user ? { authenticate: true, user } : {};
function registerReducer(state = initState, action) {

    switch (action.type) {
        case REGISTER_REQUEST: {
            return {
                authenticate: true,
            }

        }
        case REGISTER_SUCCESS: {
            return {
                authenticate: true,

            }

        }
        case REGISTER_FAILURE: {
            return {}

        }

        default: return state
    }
}

export default registerReducer;