import {
  GET_USER_WORDS,
  ADD_USER_WORD,
  GET_DELETED_WORDS,
  GET_DIFFICULT_WORDS,
  SET_WORD_AS_DIFFICULT,
  UNSET_WORD_AS_DIFFICULT,
  SET_WORD_AS_DELETED,
  UNSET_WORD_AS_DELETED,
  GET_USER_LEARNING_WORDS,
} from './userWordsActions';
import getUserWords from '../../api/getUserWords';
import sendWordGameStatistics from '../../api/sendWordGameStatistics';
import removeWordFromDifficult from '../../api/removeWordFromDifficult';
import sendWordToDeleted from '../../api/sendWordToDeleted';
import sendRemoveWordFromDeleted from '../../api/sendRemoveWordFromDeleted';
import getDeletedWords from '../../api/getDeletedWords';
import getDifficultWords from '../../api/getDifficultWords';
import userWordsConstants from '../../constants/userWordsConstants';
import getUserLearningWords from '../../api/getUserLearningWords';
import { removeWord } from './TextBookActionCreators';

const { WORD_HARD } = userWordsConstants;

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

export const setUserLearningWords = (wordsList) => ({
  type: GET_USER_LEARNING_WORDS,
  payload: wordsList,
});

export const addUserWord = (wordToAdd) => ({
  type: ADD_USER_WORD,
  payload: wordToAdd,
});

export const setUserWordDifficult = (wordId) => ({
  type: SET_WORD_AS_DIFFICULT,
  payload: { wordId },
});

export const unsetUserWordDifficult = (wordId) => ({
  type: UNSET_WORD_AS_DIFFICULT,
  payload: { wordId },
});

export const setUserWordDeleted = (wordId) => ({
  type: SET_WORD_AS_DELETED,
  payload: { wordId },
});

export const unsetUserWordDeleted = (wordId) => ({
  type: UNSET_WORD_AS_DELETED,
  payload: { wordId },
});

export const fetchUserWords = (userId, authToken) => async (dispatch) => {
  const words = await getUserWords(userId, authToken);
  return words && words.length > 0
  && dispatch(setUserWords(words));
};

export const fetchLearningWords = (userId, authToken, page = 0) => async (dispatch) => {
  const words = await getUserLearningWords(userId, authToken, page);
  return words && words[0].paginatedResults.length > 0
  && dispatch(setUserLearningWords(words[0].paginatedResults));
};

export const fetchUserDeletedWords = (userId, authToken, page = 0) => async (dispatch) => {
  const deletedWords = await getDeletedWords(userId, authToken, page);
  return deletedWords && deletedWords[0].paginatedResults.length > 0
  && dispatch(setUserDeletedWords(deletedWords[0].paginatedResults));
};

export const fetchUserDifficultWords = (userId, authToken, page = 0) => async (dispatch) => {
  const words = await getDifficultWords(userId, authToken, page);
  return words && words[0].paginatedResults.length > 0
  && dispatch(setUserDifficultWords(words[0].paginatedResults));
};

export const addWordToDifficult = (wordId, userId, authToken) => async (dispatch) => {
  const response = await sendWordGameStatistics(userId, authToken, wordId);
  if (response === 200) {
    dispatch(setUserWordDifficult(wordId));
  } else {
    dispatch(addUserWord({ difficulty: WORD_HARD, wordId }));
  }
};

export const deleteWordFromDifficult = (wordId, userId, authToken) => async (dispatch) => {
  const response = await removeWordFromDifficult(userId, authToken, wordId);
  if (response.status === 200) {
    dispatch(unsetUserWordDifficult(wordId));
  }
};

export const addWordToDeleted = (wordId, userId, authToken) => async (dispatch) => {
  const response = await sendWordToDeleted(userId, authToken, wordId);
  if (response.status === 200) {
    dispatch(setUserWordDeleted(wordId));
  }
  dispatch(removeWord(wordId));
};

export const removeWordFromDeleted = (wordId, userId, authToken) => async (dispatch) => {
  const response = await sendRemoveWordFromDeleted(userId, authToken, wordId);
  if (response.status === 200) {
    dispatch(unsetUserWordDeleted(wordId));
  }
};

export const setWordGameStatistics = (
  userId, authToken, wordId, gameName, answer,
) => async () => {
  await sendWordGameStatistics(userId, authToken, wordId, gameName, answer);
};
