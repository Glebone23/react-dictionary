import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { fetchCurrentTheme } from 'actions';

export const initialThemeInfoState = Map({ });

const themeInfo = handleActions(
  {
    [fetchCurrentTheme]: (state, { payload }) => payload,
  },
  initialThemeInfoState,
);

export default themeInfo;
