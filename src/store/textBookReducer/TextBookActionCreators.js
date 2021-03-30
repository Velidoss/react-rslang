import getWords from '../../api/getWords';
import { FETCH_TEXTBOOK_WORDS, CHANGE_TRANSLATION, CHANGE_CONTROLS } from './textBookReducerActions';

export const fetchWordsAC = (words) => ({
  type: FETCH_TEXTBOOK_WORDS,
  payload: words,
});

export const changeTranslationStateAC = (state) => ({
  type: CHANGE_TRANSLATION,
  payload: state,
});

export const fetchControlsStateAC = (state) => ({
  type: CHANGE_CONTROLS,
  payload: state,
});

export const getTextBookWords = (group = 0, page = 0) => async (dispatch) => {
  const words = await getWords(group, page);
  dispatch(fetchWordsAC(words));
};
