import axios from 'axios';
import config from 'config';

const axiosConfig = token => ({
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${token}`,
  },
});

const get = token => axios.get(`${config.serverURL}/themes`, axiosConfig(token));

const add = (token, body) => axios.post(`${config.serverURL}/themes`, body, axiosConfig(token));

const ThemesModel = { get, add };

export default ThemesModel;
