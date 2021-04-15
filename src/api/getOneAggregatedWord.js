import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const getOneAggregatedWord = async (userId, authToken, wordId) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords/${wordId}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response;
};

export default getOneAggregatedWord;
