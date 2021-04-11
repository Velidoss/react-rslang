import {
  GET_USER_WORDS, ADD_USER_WORD, CHANGE_USER_WORD_ATTRIBUTE, GET_DELETED_WORDS, GET_DIFFICULT_WORDS,
} from './userWordsActions';
import getUserWords from '../../api/getUserWords';
import sendWordToDifficult from '../../api/sendWordToDifficult';
import removeWordFromDifficult from '../../api/removeWordFromDifficult';
import getOneUserWord from '../../api/getOneUserWord';
import sendWordToDeleted from '../../api/sendWordToDeleted';
import sendRemoveWordFromDeleted from '../../api/sendRemoveWordFromDeleted';
import getDeletedWords from '../../api/getDeletedWords';

export const setUserWords = (wordsList) => ({
  type: GET_USER_WORDS,
  payload: wordsList,
});

export const setUserDeletedWords = (wordsList) => ({
  type: GET_DELETED_WORDS,
  payload: wordsList,
});

export const setUserDifficultWords = (wordsList) => ({
  type: GET_DIFFICULT_WORDS,
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

export const fetchUserDeletedWords = (userId, authToken, page) => async (dispatch) => {
  const words = await getDeletedWords(userId, authToken, page);
  return words && words.length > 0 && dispatch(setUserDeletedWords(words));
};

export const fetchUserDifficultWords = (userId, authToken, page) => async (dispatch) => {
  const words = await getUserWords(userId, authToken, page);
  return words && words.length > 0 && dispatch(setUserDifficultWords(words));
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

export const addWordToDeleted = (wordId, userId, authToken) => async (dispatch) => {
  const response = await sendWordToDeleted(userId, authToken, wordId);
  const newWord = await getOneUserWord(userId, authToken, wordId);
  if (response.status === 200) {
    dispatch(changeUserWordData(wordId, newWord.data));
  }
};

export const removeWordFromDeleted = (wordId, userId, authToken) => async (dispatch) => {
  const response = await sendRemoveWordFromDeleted(userId, authToken, wordId);
  const newWord = await getOneUserWord(userId, authToken, wordId);
  if (response.status === 200) {
    dispatch(changeUserWordData(wordId, newWord.data));
  }
};
