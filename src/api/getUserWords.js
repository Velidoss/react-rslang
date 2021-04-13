import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const getUserWords = async (userId, authToken) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/words`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default getUserWords;
