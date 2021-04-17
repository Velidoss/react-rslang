import axios from 'axios';
import getAllDeletedWords from '../../../api/getAllDeletedWords';
import getWords from '../../../api/getWords';
import DataAccessConstants from '../../../constants/DataAccessConstants';
import miniGamesConstants from '../../../constants/miniGamesConstants';
import userWordsConstants from '../../../constants/userWordsConstants';
import filterTextBookWords from '../../../utils/filterTextBookWords';

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

const createAudioChallengeWordsArr = (array) => {
  const audioChallengeWordsArr = [];
  array.forEach((el) => audioChallengeWordsArr.push({
    id: el.id || el._id,
    word: el.word,
    translation: el.wordTranslate,
    audio: el.audio,
    image: el.image,
  }));
  return audioChallengeWordsArr;
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

const getUserWordsAudioChallenge = async (userId, authToken, group = 0, page = 0) => {
  let words = await getWords(group, page);
  if (userId && authToken) {
    const deletedWords = await getAllDeletedWords(userId, authToken);
    words = filterTextBookWords(words, deletedWords[0].paginatedResults);
  }

  return words;
};

const getDeletedWordsAudioChallenge = async (userId, authToken, page) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      page,
      wordsPerPage: miniGamesConstants.audioChallengeWordsNum * (page + 1),
      filter: { 'userWord.optional.deleted': WORD_DELETED },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });

  const res = response.data ? response.data[0].paginatedResults : [];
  return res.reverse();
};

const getDifficultWordsAudioChallenge = async (userId, authToken, page = 0) => {
  const response = await axios({
    method: 'get',
    url: `${ApiUrl}/users/${userId}/aggregatedWords`,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    params: {
      page,
      wordsPerPage: miniGamesConstants.audioChallengeWordsNum * (page + 1),
      filter: { 'userWord.difficulty': WORD_HARD },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });

  const res = response.data ? response.data[0].paginatedResults : [];
  return res.reverse();
};

export {
  createQnAArrays, getUserWordsAudioChallenge, getDeletedWordsAudioChallenge,
  getDifficultWordsAudioChallenge,
};
