import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

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
