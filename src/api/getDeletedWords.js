import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_DELETED } = userWordsConstants;
const { ApiUrl } = DataAccessContants;

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
