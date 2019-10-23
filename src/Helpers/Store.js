import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import mainReducer from '../Reducers/main';

const loggerMiddleware = createLogger();

export const MyStore = createStore(
    mainReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);