import { connect } from 'react-redux';
import { RegisterFunction } from '../Actions/action-register';
import RegisterComponent from '../Components/Register/Register';
import {withRouter} from 'react-router-dom';


const mapStateToProps = state => {
    return state;
};
const mapDispatchToProps = dispatch => {
    return {
        onRegister: (name, password) => {
            dispatch(RegisterFunction(name, password));
        },
        //   logout: () => {
        //       dispatch(LogOut());
        //   },
    };
}

const RegisterContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterComponent));
export default RegisterContainer;

