import putWordData from './putWordData';

const removeWordFromDifficult = async (userId, authToken, wordId) => putWordData(userId, authToken, wordId, { difficulty: 'false' });

export default removeWordFromDifficult;
