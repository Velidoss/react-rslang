import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const getUserLearningWords = async (userId, authToken, page) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      page,
      wordsPerPage: 20,
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default getUserLearningWords;
