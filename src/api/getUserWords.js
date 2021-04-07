import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

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
