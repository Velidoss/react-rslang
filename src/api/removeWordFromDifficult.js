import putWordData from './putWordData';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_EASY } = userWordsConstants;

const removeWordFromDifficult = async (userId, authToken, wordId) => {
  const response = putWordData(userId, authToken, wordId, { difficulty: WORD_EASY });
  return response;
};

export default removeWordFromDifficult;
