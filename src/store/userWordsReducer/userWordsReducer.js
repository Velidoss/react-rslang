import userWordsConstants from '../../constants/userWordsConstants';
import {
  GET_USER_WORDS, ADD_USER_WORD,
  UNSET_WORD_AS_DIFFICULT,
  CHANGE_USER_WORD_ATTRIBUTE,
  GET_DELETED_WORDS,
  GET_DIFFICULT_WORDS,
  SET_WORD_AS_DIFFICULT,
  SET_WORD_AS_DELETED,
  UNSET_WORD_AS_DELETED,
} from './userWordsActions';

const initialState = {
  userWords: [],
  deletedWords: [],
  difficultWords: [],
};

const { WORD_HARD, WORD_EASY, WORD_DELETED } = userWordsConstants;

const userWordsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_WORDS:
      return { ...state, userWords: [...payload] };
    case GET_DIFFICULT_WORDS:
      return { ...state, difficultWords: [...payload] };
    case GET_DELETED_WORDS:
      return { ...state, deletedWords: [...payload] };
    case ADD_USER_WORD:
      return { ...state, userWords: [...state.userWords, payload] };
    case SET_WORD_AS_DIFFICULT:
      return {
        ...state,
        userWords: state.userWords.map((word) => {
          if (word.wordId === payload.wordId) {
            return { ...word, difficulty: WORD_HARD };
          }
          return word;
        }),
      };
    case UNSET_WORD_AS_DIFFICULT:
      return {
        ...state,
        userWords: state.userWords.map((word) => {
          if (word.wordId === payload.wordId) {
            return { ...word, difficulty: WORD_EASY };
          }
          return word;
        }),
      };
    case SET_WORD_AS_DELETED:
      return {
        ...state,
        userWords: state.userWords.map((word) => {
          if (word.wordId === payload.wordId) {
            return { ...word, optional: { ...word.optional, deleted: WORD_DELETED } };
          }
          return word;
        }),
      };
    case UNSET_WORD_AS_DELETED:
      return {
        ...state,
        userWords: state.userWords.map((word) => {
          if (word.wordId === payload.wordId) {
            return { ...word, optional: { ...word.optional, deleted: false } };
          }
          return word;
        }),
      };
    case CHANGE_USER_WORD_ATTRIBUTE:
      return {
        ...state,
        userWords: state.userWords.map((word) => {
          if (word.wordId === payload.wordId) {
            return payload.newData;
          }
          return word;
        }),
      };
    default:
      return { ...state };
  }
};

export default userWordsReducer;
