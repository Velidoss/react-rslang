import getWords from '../../api/getWords';
import {
  FETCH_TEXTBOOK_WORDS, TOGGLE_TRANSLATION, TOGGLE_CONTROLS, DELETE_WORD,
} from './textBookReducerActions';

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

export const getTextBookWords = (group = 0, page = 0) => async (dispatch) => {
  const words = await getWords(group, page);
  dispatch(fetchWordsAC(words));
};
