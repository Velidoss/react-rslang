import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';

const { ApiUrl } = DataAccessConstants;

const getRegisteredGameWords = async (userId, authToken, group, wordsQuantity) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      group,
      wordsPerPage: wordsQuantity,
      filter: { $or: [{ 'userWord.optional.deleted': null }, { 'userWord.optional.deleted': false }] },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });

  return response.data[0].paginatedResults;
};

export default getRegisteredGameWords;
