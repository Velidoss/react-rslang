import getWords from '../../api/getWords';
import { FETCH_TEXTBOOK_WORDS } from './textBookReducerActions';

export const fetchWordsAC = (words) => ({
  type: FETCH_TEXTBOOK_WORDS,
  payload: words,
});

export const getTextBookWords = () => async (dispatch) => {
  const words = await getWords();
  dispatch(fetchWordsAC(words));
};
