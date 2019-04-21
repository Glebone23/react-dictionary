import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import {
  userInfo, initialUserInfoState, themes, initialThemesState, themeInfo, initialThemeInfoState,
} from '../reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware()));

export const initialStoreState = Map({
  userInfo: initialUserInfoState,
  themes: initialThemesState,
  themeInfo: initialThemeInfoState,
});

const store = createStore(
  combineReducers({
    userInfo,
    themes,
    themeInfo,
  }),
  initialStoreState,
  enhancer,
);

export default store;
