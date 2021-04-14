import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import savannahConstants from '../../../../constants/savannahConstants';
import SavannahStart from '../SavannahStart/SavannahStart';
import {
  setGameActive, setWrongAnswer, setRightAnswer, setGameFinished, eraseGameState,
} from '../../../../store/savannahReducer/savannahActionCreators';
import savannahSelector from '../../../../store/selectors/savannahSelector';
import SavannahActive from '../SavannahActive/SavannahActive';
import checkIfAnswerIsRight from '../../../../utils/checkIfAnswerIsRight';
import SavannahResult from '../SavannahResult/SavannahResult';
import { setWordGameStatistics } from '../../../../store/textBookReducer/userWordsActionCreators';
import { useAuth } from '../../../../contexts/AuthContext';
import userWordsConstants from '../../../../constants/userWordsConstants';

const { WORD_ANSWER_RIGHT, WORD_ANSWER_WRONG } = userWordsConstants;

const SavannahControl = () => {
  const dispatch = useDispatch();
  const { auth: { token, userId }, isAuth } = useAuth();
  const state = useSelector(savannahSelector);

  const { GAME_STATE_START, GAME_STATE_ACTIVE, GAME_STATE_RESULT } = savannahConstants.gameStates;

  const getRandomNumber = (maxNumber) => Math.round(Math.random() * maxNumber);

  const startGame = () => dispatch(
    setGameActive(getRandomNumber(5), getRandomNumber(30), userId, token),
  );

  const dipatchRightAnswer = (wordId, answer) => {
    dispatch(setRightAnswer());
    if (isAuth) {
      dispatch(setWordGameStatistics(userId, token, wordId, 'savannah', answer));
    }
  };

  const dipatchWrongAnswer = (wordId, answer) => {
    dispatch(setWrongAnswer());
    if (isAuth) {
      dispatch(setWordGameStatistics(userId, token, wordId, 'savannah', answer));
    }
  };

  const makeAnswer = (wordGroup, wordId, answer) => {
    const result = checkIfAnswerIsRight(wordGroup, answer);

    return result
      ? dipatchRightAnswer(wordId, WORD_ANSWER_RIGHT)
      : dipatchWrongAnswer(wordId, WORD_ANSWER_WRONG);
  };

  const finishGame = () => {
    dispatch(setGameFinished());
  };

  switch (state.gameState) {
    case GAME_STATE_START:
      return <SavannahStart startGame={startGame} />;
    case GAME_STATE_ACTIVE:
      return (
        <SavannahActive
          makeAnswer={makeAnswer}
          words={state.words}
          finishGame={finishGame}
        />
      );
    case GAME_STATE_RESULT:
      return (
        <SavannahResult
          eraseGameState={() => dispatch(eraseGameState())}
          right={state.rightAnswers}
          wrong={state.wrongAnswers}
        />
      );
    default:
      return <SavannahStart startGame={startGame} />;
  }
};

export default SavannahControl;
