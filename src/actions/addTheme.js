import { createAction } from 'redux-actions';
import { getUserInfo } from '../selectors';
import { ThemesModel } from '../models';

const payloadCreator = (token, title) => ThemesModel.add(token, { title });

const addThemeAsync = createAction('ADD_THEME', payloadCreator);

const addTheme = title => (dispatch, getState) => dispatch(addThemeAsync(getUserInfo(getState()).get('token'), title));

addTheme.toString = addThemeAsync.toString;

export default addTheme;
