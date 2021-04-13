import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

import savannahConstants from '../../../../constants/savannahConstants';
import SavannahStart from '../SavannahStart/SavannahStart';
import {
  setGameActive, setWrongAnswer, setRightAnswer, setGameFinished, eraseGameState,
} from '../../../../store/savannahReducer/savannahActionCreators';
import savannahSelector from '../../../../store/selectors/savannahSelector';
import SavannahActive from '../SavannahActive/SavannahActive';
import checkIfAnswerIsRight from '../../../../utils/checkIfAnswerIsRight';
import SavannahResult from '../SavannahResult/SavannahResult';
import useStyles from '../styles/styles';

const SavannahControl = () => {
  const styles = useStyles();

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

  let component;

  switch (state.gameState) {
    case GAME_STATE_START:
      component = <SavannahStart startGame={startGame} />;
      break;
    case GAME_STATE_ACTIVE:
      component = (
        <SavannahActive
          makeAnswer={makeAnswer}
          words={state.words}
          finishGame={finishGame}
        />
      );
      break;
    case GAME_STATE_RESULT:
      component = (
        <SavannahResult
          eraseGameState={() => dispatch(eraseGameState())}
          right={state.rightAnswers}
          wrong={state.wrongAnswers}
        />
      );
      break;
    default:
      component = <SavannahStart startGame={startGame} />;
  }

  return (
    <Container>
      <div className={styles.root}>
        {component}
      </div>
    </Container>
  );
};

export default SavannahControl;
