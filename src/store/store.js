import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import {
  userInfo, initialUserInfoState, themes, initialThemesState,
} from 'reducers';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = Map({
  userInfo: initialUserInfoState,
  themes: initialThemesState,
});

const store = createStore(
  combineReducers({
    userInfo,
    themes,
  }),
  initialStoreState,
  enhancer,
);

export default store;
