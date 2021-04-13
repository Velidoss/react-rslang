import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_DELETED } = userWordsConstants;
const { ApiUrl } = DataAccessContants;

const getAllDeletedWords = async (userId, authToken) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      wordsPerPage: 3600,
      filter: { 'userWord.optional.deleted': WORD_DELETED },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default getAllDeletedWords;
