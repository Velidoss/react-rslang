import getWords from '../../api/getWords';
import { FETCH_TEXTBOOK_WORDS, CHANGE_PAGE, CHANGE_GROUP } from './textBookReducerActions';

export const fetchWordsAC = (words) => ({
  type: FETCH_TEXTBOOK_WORDS,
  payload: words,
});

export const fetchGroupAC = (group) => ({
  type: CHANGE_GROUP,
  payload: group,
});

export const fetchPageAC = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const getTextBookWords = (group = 0, page = 0) => async (dispatch) => {
  const words = await getWords(group, page);
  dispatch(fetchWordsAC(words));
};
