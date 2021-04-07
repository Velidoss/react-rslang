import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const removeWordFromDifficult = async (userId, authToken, wordId) => {
  const response = await axios({
    method: 'put',
    url: `${ApiUrl}/users/${userId}/words/${wordId}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      difficulty: 'easy',
      optional: {

      },
    }),
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default removeWordFromDifficult;
