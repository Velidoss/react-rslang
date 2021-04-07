import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const createInstance = (url = '', params = {}, headers = {}, body) => axios.create({
  baseURL: `${ApiUrl}${url}`,
  params: { ...params },
  headers: { ...headers },
  data: { ...body },
});

export default createInstance;
