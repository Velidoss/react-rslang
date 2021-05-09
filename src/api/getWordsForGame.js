import getWords from './getWords';

const getWordsForGame = async (group = 0, page = 0) => {
  const response = await getWords(group, page);
  return response;
};

export default getWordsForGame;
