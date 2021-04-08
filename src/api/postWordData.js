import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const postWordData = async (userId, authToken, wordId, body) => {
  const response = await axios({
    method: 'post',
    url: `${ApiUrl}/users/${userId}/words/${wordId}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      ...body,
    }),
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default postWordData;
