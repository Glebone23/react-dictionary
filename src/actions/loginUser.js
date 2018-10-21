import axios from 'axios';
import { createAction } from 'redux-actions';
// import { getUserInfo } from 'selectors';
import config from 'config';

const payloadCreator = (body) => {
  const axiosConfig = {
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };
  return axios.post(`${config.serverURL}/user/login`, body, axiosConfig);
};

const loginUserAsync = createAction('LOGIN_USER', payloadCreator);

const loginUser = data => dispatch => dispatch(loginUserAsync(data));

loginUser.toString = loginUserAsync.toString;

export default loginUser;
