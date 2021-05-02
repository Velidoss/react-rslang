import ITextBookWord from '../interfaces/ITextBookWord';

const determineQuestionWord = (wordGroup: ITextBookWord[]) => {
  const groupWithQuestion = [...wordGroup];
  groupWithQuestion[Math.round(Math.random() * 3)].question = true;
  return groupWithQuestion;
};

const createWordsForSavannah = (words: ITextBookWord[]) => {
  const arrayForGame = [];
  let count = 0;
  let wordGroup = [];
  while (count < words.length) {
    wordGroup.push(words[count]);
    count += 1;
    if (wordGroup.length === 4) {
      arrayForGame.push(wordGroup);
      wordGroup = [];
    }
  }
  return arrayForGame.map((group) => determineQuestionWord(group));
};

export default createWordsForSavannah;
