import { FETCH_TEXTBOOK_WORDS } from './textBookReducerActions';

const initialState = {
  words: [],
};

const textBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TEXTBOOK_WORDS:
      return {
        ...state,
        words: payload,
      };
    default:
      return { ...state };
  }
};

export default textBookReducer;
