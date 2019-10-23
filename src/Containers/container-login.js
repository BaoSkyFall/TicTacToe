import { connect } from 'react-redux';
import { LogInFunction } from '../Actions/action-login';
import LoginComponent from '../Components/Login/Login';
import {withRouter} from 'react-router-dom';


const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        onLogin: (name, password) => {
            dispatch(LogInFunction(name, password));
        },
        //   logout: () => {
        //       dispatch(LogOut());
        //   },
    };
}

const LoginContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent));
export default LoginContainer;

