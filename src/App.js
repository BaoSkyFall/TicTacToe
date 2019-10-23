import React from 'react';
import './App.css';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import myReducer from './Reducers/reducer';
import loginReducer from './Reducers/reducer-login';

import MyContainer from './Containers/container';
import LoginContainer from './Containers/container-login';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, Switch, Redirect, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import promise from "redux-promise-middleware";
import { MyStore } from './Helpers/Store';
import { history } from './Helpers/History';
function App() {

  const myStore = createStore(myReducer);
  // const loginStore = createStore(loginReducer, applyMiddleware(logger, thunk, promise));

  return (
    <Provider store={MyStore}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LoginContainer}></Route>
          <Route path="/login" exact component={LoginContainer}></Route>
          <Route path="/Game" exact component={MyContainer}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </Provider> ,
    document.getElementById('root')

  );
}

export default App;
