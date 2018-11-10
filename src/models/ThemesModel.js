import axios from 'axios';
import config from 'config';

const axiosConfig = token => ({
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${token}`,
  },
});

const get = token => axios.get(`${config.serverURL}/themes`, axiosConfig(token));

const ThemesModel = { get };

export default ThemesModel;
