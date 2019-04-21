import { fromJS, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { fetchCurrentTheme } from '../actions';

export const initialThemeInfoState = Map({ words: List([]) });

const themeInfo = handleActions(
  {
    [`${fetchCurrentTheme}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initialThemeInfoState,
);

export default themeInfo;
