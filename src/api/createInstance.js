import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const createInstance = (url = '', params = {}, headers = {}) => axios.create({
  baseURL: `${ApiUrl}${url}`,
  params: { ...params },
  headers: { ...headers },
});

export default createInstance;
