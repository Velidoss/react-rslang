import {
  GET_USER_WORDS, ADD_USER_WORD, CHANGE_USER_WORD_ATTRIBUTE, GET_DELETED_WORDS, GET_DIFFICULT_WORDS,
} from './userWordsActions';

const initialState = {
  userWords: [],
  deletedWords: [],
  difficultWords: [],
};

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
