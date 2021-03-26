import {
  SET_GAME_STATE, FETCH_WORDS, SET_RIGHT_ANSWER, SET_WRONG_ANSWER, ERASE_GAME_STATE,
} from './savannahReducerActions';
import savannahConstants from '../../constants/savannahConstants';
import createWordsForSavannah from '../../utils/createWordsForSavannah';

const {
  gameStates:
  {
    GAME_STATE_START,
  },
} = savannahConstants;

const initialState = {
  gameState: GAME_STATE_START,
  rightAnswers: 0,
  wrongAnswers: 0,
  words: [],
};

const savannahReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GAME_STATE:
      return { ...state, gameState: payload };
    case SET_RIGHT_ANSWER:
      return { ...state, rightAnswers: state.rightAnswers + 1 };
    case SET_WRONG_ANSWER:
      return { ...state, wrongAnswers: state.wrongAnswers + 1 };
    case ERASE_GAME_STATE:
      return {
        ...state,
        gameState: GAME_STATE_START,
        rightAnswers: 0,
        wrongAnswers: 0,
        words: [],
      };
    case FETCH_WORDS:
      return { ...state, words: createWordsForSavannah([...payload]) };
    default:
      return { ...state };
  }
};

export default savannahReducer;
