import { List, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { fetchThemes } from 'actions';

export const initialThemesState = List([]);

const themes = handleActions(
  {
    [`${fetchThemes}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initialThemesState,
);

export default themes;
