export const MOVE = "MOVE";
export const RESTART = "RESTART";
export const BACK_TO_STEP = "BACK_TO_STEP";
export const TOOGLE_SORT = "TOOGLE_SORT";
export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const Move = pos => {
    return {
        type: MOVE,
        pos
    };
}
export const Restart = () => {
    return {
        type: RESTART
    }
}
export const BackToStep = (value, i) => {
    return {
        type: BACK_TO_STEP,
        value,
        i
    }
}
export const ToogleSort = () => {
    return {
        type: TOOGLE_SORT
    }
}
export const Login = (data) => {
    return {
        type: LOGIN,
        data
    }
}
export const Register = (data) => {
    return {
        type: REGISTER,
        data
    }
}


