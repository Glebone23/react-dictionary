import { List, fromJS, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { fetchThemes, addTheme } from '../actions';

export const initialThemesState = List([]);

const themes = handleActions(
  {
    [`${fetchThemes}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
    [`${addTheme}_${FULFILLED}`]: (state, { payload: { data } }) => state.push(Map(data)),
  },
  initialThemesState,
);

export default themes;
