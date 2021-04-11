import getOneUserWord from './getOneUserWord';
import putWordData from './putWordData';
import postWordData from './postWordData';
import getWordById from './getWordById';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_EASY } = userWordsConstants;

const sendRemoveWordFromDeleted = async (userId, authToken, wordId) => {
  const reponse = await getOneUserWord(userId, authToken, wordId);
  const { status } = reponse;

  if (status === 200) {
    putWordData(userId, authToken, wordId, { optional: { deleted: false } });
  } else {
    const newUserWord = await getWordById(wordId);
    postWordData(userId, authToken, wordId, {
      difficulty: WORD_EASY, optional: { deleted: false, wordData: { ...newUserWord } },
    });
  }
  return reponse;
};

export default sendRemoveWordFromDeleted;
