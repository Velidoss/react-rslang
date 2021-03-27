const checkIfAnswerIsRight = (wordsGroup, answer) => {
  if (answer) {
    const answerToCheck = wordsGroup
      .filter((word) => word.word === answer)[0];
    if (answerToCheck.question) {
      return true;
    }
  }
  return false;
};

export default checkIfAnswerIsRight;
