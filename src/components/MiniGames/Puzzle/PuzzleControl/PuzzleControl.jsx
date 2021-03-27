import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import savannahConstants from '../../../../constants/savannahConstants';
import PuzzleStart from '../PuzzleStart/PuzzleStart';
import {
  setGameActive, setWrongAnswer, setRightAnswer, setGameFinished, eraseGameState,
} from '../../../../store/savannahReducer/savannahActionCreators';
import savannahSelector from '../../../../store/selectors/savannahSelector';
import PuzzleActive from '../PuzzleActive/PuzzleActive';
import checkIfAnswerIsRight from '../../../../utils/checkIfAnswerIsRight';
import PuzzleResult from '../PuzzleResult/PuzzleResult';

const PuzzleControl = () => {
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
      return <PuzzleStart startGame={startGame} />;
    case GAME_STATE_ACTIVE:
      return (
        <PuzzleActive
          makeAnswer={makeAnswer}
          words={state.words}
          finishGame={finishGame}
        />
      );
    case GAME_STATE_RESULT:
      return (
        <PuzzleResult
          eraseGameState={() => dispatch(eraseGameState())}
          right={state.rightAnswers}
          wrong={state.wrongAnswers}
        />
      );
    default:
      return <PuzzleStart startGame={startGame} />;
  }
};

export default PuzzleControl;
