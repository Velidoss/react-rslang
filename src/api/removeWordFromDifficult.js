import putWordData from './putWordData';

const removeWordFromDifficult = async (userId, authToken, wordId) => {
  const response = putWordData(userId, authToken, wordId, { difficulty: 'false' });
  return response;
};

export default removeWordFromDifficult;
