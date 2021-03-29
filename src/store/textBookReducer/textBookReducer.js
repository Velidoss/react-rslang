import { FETCH_TEXTBOOK_WORDS, CHANGE_PAGE, CHANGE_GROUP } from './textBookReducerActions';

const initialState = {
  words: [],
  page: 0,
  group: 0,
};

const textBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TEXTBOOK_WORDS:
      return {
        ...state,
        words: payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
      };
    case CHANGE_GROUP:
      return {
        ...state,
        group: payload,
      };
    default:
      return { ...state };
  }
};

export default textBookReducer;
