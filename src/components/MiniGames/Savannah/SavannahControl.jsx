import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import savannahConstants from '../../../constants/savannahContants';
import SavannahStart from './SavannahStart';
import {
  setGameActive, setWrongAnswer, setRightAnswer, setGameFinished,
} from '../../../store/savannahReducer/savannahReducer';
import savannahSelector from '../../../store/selectors/savannahSelector';
import SavannahActive from './SavannahActive';
import checkIfAnswerIsRight from '../../../utils/checkIfAnswerIsRight';

const SavannhaControl = () => {
  const dispatch = useDispatch();
  const state = useSelector(savannahSelector);
  console.log(state);

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
      return <div>result</div>;
    default:
      return <SavannahStart startGame={startGame} />;
  }
};

export default SavannhaControl;
