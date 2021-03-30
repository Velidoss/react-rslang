import { FETCH_TEXTBOOK_WORDS, CHANGE_TRANSLATION, CHANGE_CONTROLS } from './textBookReducerActions';

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
    case CHANGE_TRANSLATION:
      return {
        ...state,
        showTranslation: payload,
      };
    case CHANGE_CONTROLS:
      return {
        ...state,
        showControls: payload,
      };
    default:
      return { ...state };
  }
};

export default textBookReducer;
