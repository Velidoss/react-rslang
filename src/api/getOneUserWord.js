import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

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
