import {userService} from '../Services/userService';
import {history} from '../Helpers/History';
export const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';

export const LogInFunction = (name, password) => {
    return dispatch => {
         dispatch(Pending({ name }));
        
        // UserService LogIn function ---------------------------------
        userService.login(name, password)
        .then(
            user => { 
                dispatch(loginSuccess(user));                
                history.push('/Game');
                
            },
            error => {
                dispatch(Failure(error.toString()));
                alert("Đăng nhập thất bại");
                //dispatch(noticeError(error.toString()));
            }
        );
    };

    function Pending(user)
    {
        return {
            type: LOGIN_REQUEST,
            user,
        }
    }
    function loginSuccess(user)
    {
        return {
            type: LOGIN_SUCCESS,
            user,
        }
    }
    function Failure(error)
    {
        return {
            type: LOGIN_FAILURE,
            error,
        }
    }
}


