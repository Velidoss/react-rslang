import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Button, CircularProgress, Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SprintActive from './SprintActive/SprintActive';
import SprintResult from './SprintResult/SprintResult';
import createQnAArrays from './sprintUtils';
import getAllWordsCurrPrevPages from '../../../utils/getAllWordsCurrPrevPages';

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

const SprintControl = () => {
  const [gameState, setGameState] = useState('GAME_STATE_LOADING');
  const [wordsArray, setWordsArray] = useState([]);
  const [answersState, setAnswersState] = useState({ right: [], wrong: [] });
  const [questionNum, setQuestionNum] = useState(0);
  const [questionsArr, setQuestionsArr] = useState([]);
  const [mixedAnswersArr, setMixedAnswersArr] = useState([]);
  const [points, setPoints] = useState(0);

  const classes = useStyles();

  const location = useLocation();

  const getWordsArray = async () => {
    const groupNum = location.state.group || 0;
    const pageNum = location.state.page || 0;
    const data = await getAllWordsCurrPrevPages(groupNum, pageNum);
    setWordsArray(data);
  };

  useEffect(() => {
    setGameState('GAME_STATE_LOADING');
    getWordsArray();
  }, [location.state.group, location.state.page]);

  useEffect(() => {
    if (!wordsArray || !wordsArray.length) return;
    setGameState('GAME_STATE_START');
  }, [wordsArray]);

  const setQnA = () => {
    const { qArray, aArray } = createQnAArrays(wordsArray);
    setQuestionsArr(qArray);
    setMixedAnswersArr(aArray);
  };

  const startGame = () => {
    setGameState('GAME_STATE_ACTIVE');
    setAnswersState({ right: [], wrong: [] });
    setQuestionNum(0);
    setPoints(0);
    setQnA();
  };

  switch (gameState) {
    default:
    case 'GAME_STATE_START':
      return (
        <Container className={classes.wrapperContainer}>
          <Button
            onClick={startGame}
            variant="contained"
            color="secondary"
          >
            Start
          </Button>
        </Container>
      );
    case 'GAME_STATE_LOADING':
      return (
        <Container className={classes.wrapperContainer}>
          <CircularProgress />
        </Container>
      );
    case 'GAME_STATE_ACTIVE':
      return (
        <Container className={classes.wrapperContainer}>
          <SprintActive
            questionsArr={questionsArr}
            mixedAnswersArr={mixedAnswersArr}
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            answersState={answersState}
            setAnswersState={setAnswersState}
            points={points}
            setPoints={setPoints}
            finishGame={() => setGameState('GAME_STATE_RESULT')}
          />
        </Container>
      );
    case 'GAME_STATE_RESULT':
      return (
        <Container className={classes.wrapperContainer}>
          <SprintResult
            answersState={answersState}
            points={points}
            startGame={startGame}
          />
        </Container>
      );
  }
};

export default SprintControl;
