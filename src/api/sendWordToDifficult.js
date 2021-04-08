import getOneUserWord from './getOneUserWord';
import putWordData from './putWordData';
import postWordData from './postWordData';

const sendWordToDifficult = async (userId, authToken, wordId) => {
  const isWordDifficultAlredy = await getOneUserWord(userId, authToken, wordId);
  console.log(isWordDifficultAlredy);
  const { status } = isWordDifficultAlredy;

  if (status === 200) {
    return putWordData(userId, authToken, wordId, { difficulty: 'true' });
  }
  return postWordData(userId, authToken, wordId, { difficulty: 'true' });
};

export default sendWordToDifficult;
