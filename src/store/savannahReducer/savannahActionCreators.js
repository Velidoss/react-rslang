import {
  SET_GAME_STATE,
  FETCH_WORDS,
  SET_RIGHT_ANSWER,
  SET_WRONG_ANSWER,
  ERASE_GAME_STATE,
  FETCH_MORE_WORDS,
} from './savannahReducerActions';
import savannahConstants from '../../constants/savannahConstants';
import getWordsForGame from '../../api/getWordsForGame';
import getRegisteredGameWords from '../../api/getRegisteredGameWords';
import addAggregatedWordId from '../textBookReducer/addAggregatedWordId';

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

export const fetchMoreWordsAC = (words) => ({
  type: FETCH_MORE_WORDS,
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

export const setGameActive = (
  group, page, userId, authToken, wordsQuantity,
) => async (dispatch) => {
  if (userId && authToken) {
    const response = await getRegisteredGameWords(userId, authToken, group, wordsQuantity);
    dispatch(fetchWordsAC(addAggregatedWordId(response)));
    return dispatch(setGameState(GAME_STATE_ACTIVE));
  }
  const response = await getWordsForGame(group, page);
  dispatch(fetchWordsAC(response));
  return dispatch(setGameState(GAME_STATE_ACTIVE));
};

export const setGameFinished = () => (dispatch) => {
  dispatch(setGameState(GAME_STATE_RESULT));
};
