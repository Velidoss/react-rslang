import axios from 'axios';
import getAllDeletedWords from '../../../api/getAllDeletedWords';
import DataAccessConstants from '../../../constants/DataAccessConstants';
import miniGamesConstants from '../../../constants/miniGamesConstants';
import userWordsConstants from '../../../constants/userWordsConstants';
import filterTextBookWords from '../../../utils/filterTextBookWords';
import getAllWordsCurrPrevPages from '../../../utils/getAllWordsCurrPrevPages';

const { WORD_DELETED, WORD_HARD } = userWordsConstants;
const { ApiUrl } = DataAccessConstants;

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
    array[i].forEach((el) =>
      tmpArr.push({
        id: el.id || el._id,
        word: el.word,
        translation: el.wordTranslate,
        audio: el.audio,
      }),
    );
    sprintWordsArr.push(tmpArr);
  }
  return sprintWordsArr;
};

const createQnAArraysForPage = (array) => {
  const qArrayForPage = shuffle([...array]);
  const shuffledQArray = shuffle([...qArrayForPage]);
  const aArrayForPage = qArrayForPage.map((_el, i) =>
    Math.round(Math.random()) ? qArrayForPage[i] : shuffledQArray[i],
  );
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

const getUserWordsSprint = async (userId, authToken, group = 0, page = 0) => {
  const words = await getAllWordsCurrPrevPages(group, page);
  const res = [];
  if (userId && authToken) {
    const deletedWords = await getAllDeletedWords(userId, authToken);
    words.forEach((word) => res.push(filterTextBookWords(word, deletedWords[0].paginatedResults)));
  }

  return res;
};

const getDeletedWordsSprint = async (userId, authToken, page = 0) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      wordsPerPage: miniGamesConstants.sprintWordsNum * (page + 1),
      filter: { 'userWord.optional.deleted': WORD_DELETED },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });

  const res = [];
  const tmp = response.data ? response.data[0].paginatedResults : [];
  const len = tmp.length / miniGamesConstants.sprintWordsNum;
  for (let i = 0; i < len; i += 1) {
    res.push(tmp.splice(-miniGamesConstants.sprintWordsNum));
  }
  return res;
};

const getDifficultWordsSprint = async (userId, authToken, page = 0) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      wordsPerPage: miniGamesConstants.sprintWordsNum * (page + 1),
      filter: { 'userWord.difficulty': WORD_HARD },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });

  const res = [];
  const tmp = response.data ? response.data[0].paginatedResults : [];
  const len = tmp.length / miniGamesConstants.sprintWordsNum;
  for (let i = 0; i < len; i += 1) {
    res.push(tmp.splice(-miniGamesConstants.sprintWordsNum));
  }
  return res;
};

export { createQnAArrays, getUserWordsSprint, getDeletedWordsSprint, getDifficultWordsSprint };
