import getOneUserWord from './getOneUserWord';
import putWordData from './putWordData';
import postWordData from './postWordData';
import getWordById from './getWordById';
import userWordsConstants from '../constants/userWordsConstants';

const { WORD_EASY } = userWordsConstants;

const sendWordToDeleted = async (userId, authToken, wordId) => {
  const reponse = await getOneUserWord(userId, authToken, wordId);
  const { status } = reponse;

  if (status === 200) {
    putWordData(userId, authToken, wordId, { optional: { deleted: true } });
  } else {
    const newUserWord = await getWordById(wordId);
    postWordData(userId, authToken, wordId, {
      difficulty: WORD_EASY, optional: { deleted: true, wordData: { ...newUserWord } },
    });
  }

  return reponse;
};

export default sendWordToDeleted;
