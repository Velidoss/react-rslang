import { GET_USER_WORDS, ADD_USER_WORD, CHANGE_USER_WORD_ATTRIBUTE } from './userWordsActions';

const initialState = {
  userWords: [],
};

const userWordsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_WORDS:
      return { ...state, userWords: [...payload] };
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
