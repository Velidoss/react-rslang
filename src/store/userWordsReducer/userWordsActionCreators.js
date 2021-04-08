import { GET_USER_WORDS, ADD_USER_WORD, CHANGE_USER_WORD_ATTRIBUTE } from './userWordsActions';
import getUserWords from '../../api/getUserWords';
import sendWordToDifficult from '../../api/sendWordToDifficult';
import removeWordFromDifficult from '../../api/removeWordFromDifficult';
import getOneUserWord from '../../api/getOneUserWord';

export const setUserWords = (wordsList) => ({
  type: GET_USER_WORDS,
  payload: wordsList,
});

export const addUserWord = (wordToAdd) => ({
  type: ADD_USER_WORD,
  payload: wordToAdd,
});

export const changeUserWordData = (wordId, newData) => ({
  type: CHANGE_USER_WORD_ATTRIBUTE,
  payload: { wordId, newData },
});

export const fetchUserWords = (userId, authToken) => async (dispatch) => {
  const words = await getUserWords(userId, authToken);
  return words && words.length > 0 && dispatch(setUserWords(words));
};

export const addWordToDifficult = (wordId, userId, authToken) => async (dispatch) => {
  const response = await sendWordToDifficult(userId, authToken, wordId);
  const newWord = await getOneUserWord(userId, authToken, wordId);
  if (response === 200) {
    dispatch(changeUserWordData(wordId, newWord.data));
  } else {
    dispatch(addUserWord(newWord.data));
  }
};

export const deleteWordFromDifficult = (wordId, userId, authToken) => async (dispatch) => {
  const response = await removeWordFromDifficult(userId, authToken, wordId);
  const newWord = await getOneUserWord(userId, authToken, wordId);
  if (response.status === 200) {
    dispatch(changeUserWordData(wordId, newWord.data));
  }
};
