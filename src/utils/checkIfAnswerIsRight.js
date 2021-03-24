const checkIfAnswerIsRight = (words, answer) => words
  .filter((word) => word.word === answer.name);

export default checkIfAnswerIsRight;
