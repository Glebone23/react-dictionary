import axios from 'axios';
import config from 'config';

const axiosConfig = {
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
};

const login = body => axios.post(`${config.serverURL}/user/login`, body, axiosConfig);

const signup = body => axios.post(`${config.serverURL}/user/signup`, body, axiosConfig);

const UserModel = { login, signup };

export default UserModel;
