import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const getAggregatedWords = (userId, authToken) => axios({
  method: 'get',
  url: `${ApiUrl}/users/${userId}/aggregatedWords`,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export default getAggregatedWords;
