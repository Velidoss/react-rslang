const checkIfAnswerIsRight = (wordsGroup, answer) => {
  const answerToCheck = wordsGroup
    .filter((word) => {
      console.log(word.word, answer);
      return word.word === answer;
    })[0];
  if (answerToCheck.question) {
    return true;
  }
  return false;
};

export default checkIfAnswerIsRight;
