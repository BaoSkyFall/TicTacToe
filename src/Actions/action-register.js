import {userService} from '../Services/userService';
import {history} from '../Helpers/History';
export const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'USERS_REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE';

export const RegisterFunction = (name, password) => {
    return dispatch => {
         dispatch(Pending({ name }));
        
        // UserService LogIn function ---------------------------------
        userService.register(name, password)
        .then(
            user => { 
                dispatch(registerSuccess(user));                
                history.push('/Game');
                
            },
            error => {
                dispatch(Failure(error.toString()));
                alert("Đăng ky thất bại");
                //dispatch(noticeError(error.toString()));
            }
        );
    };

    function Pending(user)
    {
        return {
            type: REGISTER_REQUEST,
            user,
        }
    }
    function registerSuccess(user)
    {
        return {
            type: REGISTER_SUCCESS,
            user,
        }
    }
    function Failure(error)
    {
        return {
            type: REGISTER_FAILURE,
            error,
        }
    }
}


