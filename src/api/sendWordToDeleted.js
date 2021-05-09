import getOneUserWord from './getOneUserWord';
import putWordData from './putWordData';
import postWordData from './postWordData';
import getWordById from './getWordById';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_EASY, WORD_DELETED } = userWordsConstants;

const sendWordToDeleted = async (userId, authToken, wordId) => {
  const reponse = await getOneUserWord(userId, authToken, wordId);
  const { status } = reponse;

  if (status === 200) {
    putWordData(userId, authToken, wordId, { optional: { deleted: WORD_DELETED } });
  } else {
    const newUserWord = await getWordById(wordId);
    postWordData(userId, authToken, wordId, {
      difficulty: WORD_EASY,
      optional: { deleted: WORD_DELETED, wordData: { ...newUserWord } },
    });
  }

  return reponse;
};

export default sendWordToDeleted;
