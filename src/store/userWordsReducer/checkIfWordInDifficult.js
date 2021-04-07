const checkIfWordInDifficult = (wordToCheck, wordsArray) => {
  const difficultWordsArray = wordsArray.filter((word) => word.difficulty && word);
  return difficultWordsArray.some((word) => word.wordId === wordToCheck.id);
};

export default checkIfWordInDifficult;
