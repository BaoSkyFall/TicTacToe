import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Login } from '../Components/Login';
import { Table } from '../Components/Table';
class RouterURL extends Component {
    render() {
        return (
            <Router>
                < div >
                    <Route exact path="/Login">
                        <Login />
                    </Route>
                    <Route path="/TicTacToe">
                        <Table />
                    </Route>

                </div >
            </Router>

        );
    }
}