import ITextBookWord from '../interfaces/ITextBookWord';

const checkIfAnswerIsRight = (wordsGroup: ITextBookWord[], answer: string): boolean => {
  if (answer) {
    const answerToCheck = wordsGroup.filter((word) => word.word === answer)[0];
    if (answerToCheck.question) {
      return true;
    }
  }
  return false;
};

export default checkIfAnswerIsRight;
