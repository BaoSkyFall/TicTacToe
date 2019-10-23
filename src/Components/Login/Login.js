import React from 'react';
import './Login.css';
import {
    Link
} from "react-router-dom";
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: event.target[0].value,
            password: event.target[1].value
        };
        this.props.onLogin(data.name, data.password);

    
    }
    render() {
        return (
            <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" ref="form" onSubmit={this.handleSubmit} className="form" action="" method="post">
                                    <h3 className="text-center text-info">Login</h3>
                                    <div className="form-group">
                                        <label for="username" className="text-info">Username:</label><br></br>
                                        <input type="text" name="name" id="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Password:</label><br></br>
                                        <input type="password" name="password" id="password" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary button-submit">
                                        Login <span className="badge badge-primary"></span>
                                    </button>
                                    <div id="register-link" className="text-right mt-0  mb-1">
                                        <Link className="text-info" to="/Register">
                                            Register here </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}
export default LoginComponent;
