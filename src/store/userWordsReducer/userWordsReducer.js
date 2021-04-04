import { GET_USER_WORDS } from './userWordsActions';

const initialState = {
  userWords: [],
};

const userWordsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_WORDS:
      return { ...state, userWords: [...payload] };
    default:
      return { ...state };
  }
};

export default userWordsReducer;
