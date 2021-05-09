import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const createInstance = (url = '', params = {}, headers = {}, body) =>
  axios.create({
    baseURL: `${ApiUrl}${url}`,
    params: { ...params },
    headers: { ...headers },
    data: { ...body },
  });

export default createInstance;
