import getWords from '../../api/getWords';
import {
  SET_GAME_STATE, SET_ANSWER, FETCH_WORDS, SET_RIGHT_ANSWER, SET_WRONG_ANSWER, ERASE_GAME_STATE,
} from './savannahReducerActions';
import savannahConstants from '../../constants/savannahContants';
import createWordsForSavannah from '../../utils/createWordsForSavannah';

const {
  gameStates:
  {
    GAME_STATE_START,
    GAME_STATE_ACTIVE,
    GAME_STATE_RESULT,
  },
} = savannahConstants;

const initialState = {
  gameState: GAME_STATE_START,
  rightAnswers: 0,
  wrongAnswers: 0,
  words: [],
};

const savannahReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GAME_STATE:
      return { ...state, gameState: payload };
    case SET_ANSWER:
      return { ...state };
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
      return { ...state, words: createWordsForSavannah([...action.payload.words]) };
    default:
      return { ...state };
  }
};

export const fetchWordsAC = (words) => ({
  type: FETCH_WORDS,
  payload: words,
});

export const setGameState = (gameState) => ({
  type: SET_GAME_STATE,
  payload: gameState,
});

export const setRightAnswer = () => ({
  type: SET_RIGHT_ANSWER,
});

export const setWrongAnswer = () => ({
  type: SET_WRONG_ANSWER,
});

export const eraseGameState = () => ({
  type: ERASE_GAME_STATE,
});

export const getWordsFromAPI = () => async (dispatch) => {
  const data = await getWords();
  dispatch(fetchWordsAC(data));
};

export const setGameActive = () => (dispatch) => {
  dispatch(getWordsFromAPI());
  dispatch(setGameState(GAME_STATE_ACTIVE));
};

export const setGameFinished = () => (dispatch) => {
  dispatch(setGameState(GAME_STATE_RESULT));
};

export default savannahReducer;
