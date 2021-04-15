import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Container } from '@material-ui/core';
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

const useStyles = makeStyles(() => ({
  sprintResultP: {
    textAlign: 'center',
    margin: '1rem',
  },
  wrapperContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem auto',
  },
}));

const { WORD_ANSWER_RIGHT, WORD_ANSWER_WRONG } = userWordsConstants;

const SavannahControl = () => {
  const dispatch = useDispatch();
  const { auth: { token, userId }, isAuth } = useAuth();
  const state = useSelector(savannahSelector);

  const classes = useStyles();

  const { GAME_STATE_START, GAME_STATE_ACTIVE, GAME_STATE_RESULT } = savannahConstants.gameStates;

  const getRandomNumber = (maxNumber) => Math.round(Math.random() * maxNumber);

  const startGame = () => dispatch(
    setGameActive(getRandomNumber(5), getRandomNumber(30), userId, token, 40),
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
      return (
        <Container className={classes.wrapperContainer}>
          <SavannahStart startGame={startGame} />
        </Container>
      );
    case GAME_STATE_ACTIVE:
      return (
        <Container className={classes.wrapperContainer}>
          <SavannahActive
            makeAnswer={makeAnswer}
            words={state.words}
            finishGame={finishGame}
          />
        </Container>

      );
    case GAME_STATE_RESULT:
      return (
        <Container className={classes.wrapperContainer}>
          <SavannahResult
            eraseGameState={() => dispatch(eraseGameState())}
            right={state.rightAnswers}
            wrong={state.wrongAnswers}
          />
        </Container>

      );
    default:
      return (
        <Container className={classes.wrapperContainer}>
          <SavannahStart startGame={startGame} />
        </Container>
      );
  }
};

export default SavannahControl;
