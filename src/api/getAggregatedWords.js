import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const getAggregatedWords = (userId, authToken) => axios({
  method: 'get',
  url: `${ApiUrl}/users/${userId}/aggregatedWords`,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
  params: {
    wordsPerPage: 3600,
  },
});

export default getAggregatedWords;
