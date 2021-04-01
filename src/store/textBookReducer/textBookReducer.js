import { FETCH_TEXTBOOK_WORDS, TOGGLE_TRANSLATION, TOGGLE_CONTROLS } from './textBookReducerActions';

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
    default:
      return { ...state };
  }
};

export default textBookReducer;
