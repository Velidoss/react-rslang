import getOneUserWord from './getOneUserWord';
import putWordData from './putWordData';
import postWordData from './postWordData';

const sendWordToDifficult = async (userId, authToken, wordId) => {
  const isWordDifficultAlredy = await getOneUserWord(userId, authToken, wordId);
  const { status } = isWordDifficultAlredy;

  if (status === 200) {
    putWordData(userId, authToken, wordId, { difficulty: 'true' });
  }
  postWordData(userId, authToken, wordId, { difficulty: 'true' });
  return status;
};

export default sendWordToDifficult;
