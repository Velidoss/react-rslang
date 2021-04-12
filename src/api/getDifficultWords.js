import axios from 'axios';
import DataAccessContants from '../constants/DataAccessContants';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_HARD } = userWordsConstants;

const { ApiUrl } = DataAccessContants;

const getDifficultWords = async (userId, authToken, page = 0) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      page,
      wordsPerPage: 20,
      filter: { 'userWord.difficulty': WORD_HARD },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });
  return response.data;
};

export default getDifficultWords;
