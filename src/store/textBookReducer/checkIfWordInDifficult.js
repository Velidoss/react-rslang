import userWordsConstants from '../../constants/userWordsConstants';

const { WORD_HARD } = userWordsConstants;

const checkIfWordInDifficult = (wordToCheck, wordsArray) => {
  const difficultWordsArray = wordsArray.filter((word) => word.difficulty === WORD_HARD && word);
  return difficultWordsArray.some((word) => word.wordId === wordToCheck.id);
};

export default checkIfWordInDifficult;
