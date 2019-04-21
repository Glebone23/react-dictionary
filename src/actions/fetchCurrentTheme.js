import { createAction } from 'redux-actions';
import { getUserInfo } from '../selectors';
import { ThemesModel } from '../models';

const payloadCreator = (token, id) => ThemesModel.getById(token, id);

const fetchCurrentThemeAsync = createAction('FETCH_CURRENT_THEME', payloadCreator);

const fetchCurrentTheme = id => (dispatch, getState) => (
  dispatch(fetchCurrentThemeAsync(getUserInfo(getState()).get('token'), id))
);

fetchCurrentTheme.toString = fetchCurrentThemeAsync.toString;

export default fetchCurrentTheme;
