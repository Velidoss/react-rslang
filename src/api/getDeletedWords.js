import axios from 'axios';
import DataAccessConstants from '../constants/DataAccessConstants';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_DELETED } = userWordsConstants;
const { ApiUrl } = DataAccessConstants;

const getDeletedWords = async (userId, authToken, page) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      page,
      wordsPerPage: 20,
      filter: { 'userWord.optional.deleted': WORD_DELETED },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default getDeletedWords;
