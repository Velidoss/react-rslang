import axios from 'axios';
import DataAccessConstants from '../../../constants/DataAccessConstants';
import miniGamesConstants from '../../../constants/miniGamesConstants';

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
      id: el.id || el._id, word: el.word, translation: el.wordTranslate, audio: el.audio,
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

const getUserWords = async (userId, authToken, group = 0, page = 0) => {
  const { ApiUrl } = DataAccessConstants;
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      group,
      wordsPerPage: miniGamesConstants.sprintWordsNum * (page + 1),
      filter: { $or: [{ 'userWord.optional.deleted': null }, { 'userWord.optional.deleted': false }] },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });

  const res = [];
  const tmp = response.data ? response.data[0].paginatedResults.filter((w) => w.page <= page) : [];
  const len = tmp.length / miniGamesConstants.sprintWordsNum;
  for (let i = 0; i < len; i += 1) {
    res.push(tmp.splice(-miniGamesConstants.sprintWordsNum));
  }
  return res;
};

export { createQnAArrays, getUserWords };
