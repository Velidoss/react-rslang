import getOneUserWord from './getOneUserWord';
import putWordData from './putWordData';
import postWordData from './postWordData';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_HARD } = userWordsConstants;

const sendWordToDifficult = async (userId, authToken, wordId) => {
  const isWordDifficultAlredy = await getOneUserWord(userId, authToken, wordId);
  const { status } = isWordDifficultAlredy;

  if (status === 200) {
    putWordData(userId, authToken, wordId, { difficulty: WORD_HARD });
  } else {
    postWordData(userId, authToken, wordId, { difficulty: WORD_HARD });
  }
  return status;
};

export default sendWordToDifficult;
