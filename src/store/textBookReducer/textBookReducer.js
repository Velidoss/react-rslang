import {
  FETCH_TEXTBOOK_WORDS,
  TOGGLE_TRANSLATION,
  TOGGLE_CONTROLS,
  DELETE_WORD,
} from './textBookReducerActions';
import userWordsConstants from '../../constants/userWordsConstants';
import {
  GET_USER_WORDS,
  GET_DIFFICULT_WORDS,
  ADD_USER_WORD,
  UNSET_WORD_AS_DIFFICULT,
  GET_DELETED_WORDS,
  GET_USER_LEARNING_WORDS,
  SET_WORD_AS_DELETED,
  SET_WORD_AS_DIFFICULT,
  UNSET_WORD_AS_DELETED,
} from './userWordsActions';

const initialState = {
  words: [],
  showTranslation: true,
  showControls: true,
  userWords: [],
  learningWords: [],
  learningWordsQuantity: 0,
  deletedWords: [],
  deletedWordsQuantity: 0,
  difficultWords: [],
  difficultWordsQuantity: 0,
};

const { WORD_EASY, WORD_HARD, WORD_DELETED } = userWordsConstants;

const setWordAsDifficult = (state, payload) => ({
  ...state,
  userWords: state.userWords.map((word) => {
    if (word.wordId === payload.wordId) {
      return { ...word, difficulty: WORD_HARD };
    }
    return word;
  }),
});

const unsetWordAsDifficult = (state, payload) => ({
  ...state,
  userWords: state.userWords.map((word) => {
    if (word.wordId === payload.wordId) {
      return { ...word, difficulty: WORD_EASY };
    }
    return word;
  }),
  difficultWords: [
    ...state.difficultWords.filter(
      (word) => word._id !== payload.wordId && word,
    ),
  ],
});

const setWordAsDeleted = (state, payload) => ({
  ...state,
  userWords: state.userWords.map((word) => {
    if (word.wordId === payload.wordId) {
      return { ...word, optional: { ...word.optional, deleted: WORD_DELETED } };
    }
    return word;
  }),
});

const unsetWordAsDeleted = (state, payload) => ({
  ...state,
  userWords: state.userWords.map((word) => {
    if (word.wordId === payload.wordId) {
      return { ...word, optional: { ...word.optional, deleted: false } };
    }
    return word;
  }),
  deletedWords: [
    ...state.deletedWords.filter(
      (word) => word._id !== payload.wordId && word,
    ),
  ],
});

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
    case GET_USER_WORDS:
      return { ...state, userWords: [...payload] };
    case GET_DIFFICULT_WORDS:
      return {
        ...state,
        difficultWords: [...payload.wordsList],
        difficultWordsQuantity: payload.wordsQuantity,
      };
    case GET_DELETED_WORDS:
      return {
        ...state,
        deletedWords: [...payload.wordsList],
        deletedWordsQuantity: payload.wordsQuantity,
      };
    case ADD_USER_WORD:
      return { ...state, userWords: [...state.userWords, payload] };
    case GET_USER_LEARNING_WORDS:
      return {
        ...state,
        learningWords: [...payload.wordsList],
        learningWordsQuantity: payload.wordsQuantity,
      };
    case SET_WORD_AS_DIFFICULT:
      return setWordAsDifficult(state, payload);
    case UNSET_WORD_AS_DIFFICULT:
      return unsetWordAsDifficult(state, payload);
    case SET_WORD_AS_DELETED:
      return setWordAsDeleted(state, payload);
    case UNSET_WORD_AS_DELETED:
      return unsetWordAsDeleted(state, payload);
    default:
      return { ...state };
  }
};

export default textBookReducer;
