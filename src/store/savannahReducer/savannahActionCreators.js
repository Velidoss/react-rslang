import getWords from '../../api/getWords';
import {
  SET_GAME_STATE, FETCH_WORDS, SET_RIGHT_ANSWER, SET_WRONG_ANSWER, ERASE_GAME_STATE,
} from './savannahReducerActions';
import savannahConstants from '../../constants/savannahConstants';

const {
  gameStates:
  {
    GAME_STATE_ACTIVE,
    GAME_STATE_RESULT,
  },
} = savannahConstants;

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

export const setGameActive = () => async (dispatch) => {
  const data = await getWords();
  dispatch(fetchWordsAC(data));
  dispatch(setGameState(GAME_STATE_ACTIVE));
};

export const setGameFinished = () => (dispatch) => {
  dispatch(setGameState(GAME_STATE_RESULT));
};
