import { GET_USER_WORDS } from './userWordsActions';
import getUserWords from '../../api/getUserWords';
import sendWordToDifficult from '../../api/sendWordToDifficult';
import removeWordFromDifficult from '../../api/removeWordFromDifficult';

export const setUserWords = (wordsList) => ({
  type: GET_USER_WORDS,
  payload: wordsList,
});

export const fetchUserWords = () => async (dispatch) => {
  const words = await getUserWords(userId, authToken);
  dispatch(setUserWords(words));
};

export const addWordToDifficult = (wordId) => async (dispatch) => {
  const wordSent = await sendWordToDifficult(userId, authToken, wordId);
  console.log(wordSent);
  const words = await getUserWords(userId, authToken);
  dispatch(setUserWords(words));
};

export const deleteWordFromDifficult = (wordId) => async (dispatch) => {
  const wordSent = await removeWordFromDifficult(userId, authToken, wordId);
  console.log(wordSent);
  const words = await getUserWords(userId, authToken);
  dispatch(setUserWords(words));
};
