import getWords from './getWords';
import filterTextBookWords from '../utils/filterTextBookWords';

const getWordsForTextBookGame = async (
  group = 0, page = 0, deletedWords,
) => {
  const response = await getWords(group, page);
  return deletedWords ? filterTextBookWords(response, deletedWords) : response;
};
// let wordsForGame = [];
// let requestPage = page;
// while (wordsForGame.length < wordsQuantity) {
//   const words = filterTextBookWords(getWords(group, requestPage), deletedWords);
//   requestPage += 1;
//   wordsForGame = [...wordsForGame, words];
// }
// while (wordsForGame.length > wordsQuantity) {
//   wordsForGame.pop();
// }

// return wordsForGame;

export default getWordsForTextBookGame;
