const shuffle = (array) => {
  const shuffledArray = [...array];
  for (let i = 0; i < array.length; i += 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = tmp;
  }
  return shuffledArray;
};

const createSprintWordsArr = (array) => {
  const sprintWordsArr = [];
  for (let i = 0; i < array.length; i += 1) {
    const tmpArr = [];
    array[i].forEach((el) => tmpArr.push({
      id: el.id, word: el.word, translation: el.wordTranslate,
    }));
    sprintWordsArr.push(tmpArr);
  }
  return sprintWordsArr;
};

const createQnAArraysForPage = (array) => {
  const qArrayForPage = shuffle([...array]);
  const shuffledQArray = shuffle([...qArrayForPage]);
  const aArrayForPage = qArrayForPage
    .map((_el, i) => (Math.round(Math.random()) ? qArrayForPage[i] : shuffledQArray[i]));
  return { qArrayForPage, aArrayForPage };
};

const createQnAArrays = (initArray) => {
  const array = createSprintWordsArr(initArray);
  const qArray = [];
  const aArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const { qArrayForPage, aArrayForPage } = createQnAArraysForPage(array[i]);
    qArray.push(...qArrayForPage);
    aArray.push(...aArrayForPage);
  }
  return { qArray, aArray };
};

export default createQnAArrays;
