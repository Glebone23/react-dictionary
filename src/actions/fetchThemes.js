import { createAction } from 'redux-actions';
import { getUserInfo } from '../selectors';
import { ThemesModel } from '../models';

const payloadCreator = token => ThemesModel.get(token);

const fetchThemesAsync = createAction('FETCH_THEMES', payloadCreator);

const fetchThemes = () => (dispatch, getState) => dispatch(fetchThemesAsync(getUserInfo(getState()).get('token')));

fetchThemes.toString = fetchThemesAsync.toString;

export default fetchThemes;
