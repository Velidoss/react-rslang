import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';

const { ApiUrl } = DataAccessContants;

const putWordData = async (userId, authToken, wordId, dataToChange) => {
  const response = await axios({
    method: 'put',
    url: `${ApiUrl}/users/${userId}/words/${wordId}`,
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      ...dataToChange,
    }),
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default putWordData;
