import {
  FETCH_TEXTBOOK_WORDS, TOGGLE_TRANSLATION, TOGGLE_CONTROLS, DELETE_WORD,
} from './textBookReducerActions';

const initialState = {
  words: [],
  showTranslation: true,
  showControls: true,
};

const textBookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TEXTBOOK_WORDS:
      return {
        ...state,
        words: payload,
      };
    case TOGGLE_TRANSLATION:
      return {
        ...state,
        showTranslation: payload,
      };
    case TOGGLE_CONTROLS:
      return {
        ...state,
        showControls: payload,
      };
    case DELETE_WORD:
      return {
        ...state,
        words: [...state.words.filter((word) => word.id !== payload)],
      };
    default:
      return { ...state };
  }
};

export default textBookReducer;
