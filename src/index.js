import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import MyContainer from './Containers/container';
import LoginContainer from './Containers/container-login';
import RegisterContainer from './Containers/container-register';

import { Provider } from 'react-redux';

import { Router, Switch, Redirect, Route } from 'react-router-dom';

import { MyStore } from './Helpers/Store';
import { history } from './Helpers/History';
import { RoutePrivate } from './Components/RoutePrivate/RoutePrivate';




ReactDOM.render(
  <Provider store={MyStore}>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={LoginContainer}></Route>
        <Route path="/login" exact component={LoginContainer}></Route>
        <Route path="/register" exact component={RegisterContainer}></Route>
        <RoutePrivate path="/Game" exact component={MyContainer}></RoutePrivate>
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>
</Provider> ,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
