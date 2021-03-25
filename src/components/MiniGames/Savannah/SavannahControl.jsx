import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import savannahConstants from '../../../constants/savannahContants';
import SavannahStart from './SavannahStart';
import {
  setGameActive, setWrongAnswer, setRightAnswer, setGameFinished, eraseGameState,
} from '../../../store/savannahReducer/savannahActionCreators';
import savannahSelector from '../../../store/selectors/savannahSelector';
import SavannahActive from './SavannahActive';
import checkIfAnswerIsRight from '../../../utils/checkIfAnswerIsRight';
import SavannahResult from './SavannahResult';

const SavannahControl = () => {
  const dispatch = useDispatch();
  const state = useSelector(savannahSelector);

  const { GAME_STATE_START, GAME_STATE_ACTIVE, GAME_STATE_RESULT } = savannahConstants.gameStates;

  const startGame = () => dispatch(setGameActive());

  const makeAnswer = (wordGroup, answer) => {
    const result = checkIfAnswerIsRight(wordGroup, answer);
    return result
      ? dispatch(setRightAnswer())
      : dispatch(setWrongAnswer());
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
