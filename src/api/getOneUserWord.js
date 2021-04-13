import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const getOneUserWord = async (userId, authToken, wordId) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/words/${wordId}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response;
};

export default getOneUserWord;
