import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

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
  return response;
};

export default putWordData;
