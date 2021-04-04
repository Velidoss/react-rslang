import { GET_USER_WORDS } from './userWordsActions';
import getUserWords from '../../api/getUserWords';

export const setUserWords = (wordsList) => ({
  type: GET_USER_WORDS,
  payload: wordsList,
});

export const fetchUserWords = (userId, authToken) => async (dispatch) => {
  const words = getUserWords(userId, authToken);
  dispatch(setUserWords(words));
};
