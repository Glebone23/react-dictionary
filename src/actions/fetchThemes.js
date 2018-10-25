import axios from 'axios';
import { createAction } from 'redux-actions';
import { getUserInfo } from 'selectors';
import config from 'config';

const payloadCreator = (token) => {
  const axiosConfig = {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(`${config.serverURL}/themes`, axiosConfig);
};

const fetchThemesAsync = createAction('FETCH_THEMES', payloadCreator);

const fetchThemes = () => (dispatch, getState) => dispatch(fetchThemesAsync(getUserInfo(getState()).get('token')));

fetchThemes.toString = fetchThemesAsync.toString;

export default fetchThemes;
