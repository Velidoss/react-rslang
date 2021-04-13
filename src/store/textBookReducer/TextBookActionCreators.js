import getWords from '../../api/getWords';
import {
  FETCH_TEXTBOOK_WORDS, TOGGLE_TRANSLATION, TOGGLE_CONTROLS, DELETE_WORD,
} from './textBookReducerActions';
import filterTextBookWords from '../../utils/filterTextBookWords';
import getAllDeletedWords from '../../api/getAllDeletedWords';

export const fetchWordsAC = (words) => ({
  type: FETCH_TEXTBOOK_WORDS,
  payload: words,
});

export const changeTranslationStateAC = (state) => ({
  type: TOGGLE_TRANSLATION,
  payload: state,
});

export const fetchControlsStateAC = (state) => ({
  type: TOGGLE_CONTROLS,
  payload: state,
});

export const removeWord = (wordId) => ({
  type: DELETE_WORD,
  payload: wordId,
});

export const getTextBookWords = (group = 0, page = 0, userId, authToken) => async (dispatch) => {
  let words = await getWords(group, page);
  if (userId && authToken) {
    const deletedWords = await getAllDeletedWords(userId, authToken);
    words = filterTextBookWords(words, deletedWords[0].paginatedResults);
  }
  dispatch(fetchWordsAC(words));
};
