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
      wordsPerPage: miniGamesConstants.audioChallengeWordsNum,
      filter: { $or: [{ 'userWord.optional.deleted': null }, { 'userWord.optional.deleted': false }] },
    },
  }).catch((error) => {
    console.log(error);
    return {};
  });

  const res = response.data ? response.data[0].paginatedResults : [];
  return res.filter((el) => el.page <= page).reverse();
};

export { createQnAArrays, getUserWords };
