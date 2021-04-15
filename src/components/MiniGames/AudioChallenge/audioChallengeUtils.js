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

const createAudioChallengeWordsArr = (array) => {
  const sprintWordsArr = [];
  array.forEach((el) => sprintWordsArr.push({
    id: el.id, word: el.word, translation: el.wordTranslate, audio: el.audio, image: el.image,
  }));
  return sprintWordsArr;
};

const createAArr = (array) => {
  const aArr = [];
  for (let i = 0; i < array.length; i += 1) {
    const tmpArr = shuffle(array.filter((el, index) => index !== i)).slice(0, 4);
    aArr.push(shuffle([...tmpArr, array[i]]));
  }
  return aArr;
};

const createQnAArrays = (initArray) => {
  const array = createAudioChallengeWordsArr(initArray);
  const qArray = shuffle([...array]);
  const aArray = createAArr(qArray);
  return { qArray, aArray };
};

export default createQnAArrays;
