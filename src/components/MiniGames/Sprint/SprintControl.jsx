import React, { useState, useEffect } from 'react';
import {
  Button, CircularProgress, Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SprintActive from './SprintActive/SprintActive';
import SprintResult from './SprintResult/SprintResult';
import getWords from '../../../api/getWords';

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

const shuffle = (array) => {
  const shuffledArray = [...array];
  for (let i = 0; i < array.length; i += 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = tmp;
  }
  return shuffledArray;
};

const createQnAArrays = (array) => {
  const qArray = shuffle([...array]);
  const shuffledQArray = shuffle([...qArray]);
  const aArray = [];
  qArray.map((el, i) => {
    const num = Math.round(Math.random());
    aArray.push(num ? qArray[i] : shuffledQArray[i]);
    return el;
  });
  return { qArray, aArray };
};

const SprintControl = () => {
  const [gameState, setGameState] = useState('GAME_STATE_LOADING');
  const [wordsArray, setWordsArray] = useState([]);
  const [answersState, setAnswersState] = useState({ right: [], wrong: [] });
  const [questionNum, setQuestionNum] = useState(0);
  const [questionsArr, setQuestionsArr] = useState([]);
  const [mixedAnswersArr, setMixedAnswersArr] = useState([]);
  const [points, setPoints] = useState(0);

  const classes = useStyles();

  const getWordsArray = async () => {
    const data = await getWords();
    setWordsArray(data);
  };

  useEffect(() => {
    getWordsArray();
  }, []);

  useEffect(() => {
    if (!wordsArray || !wordsArray.length) return;
    setGameState('GAME_STATE_START');
  }, [wordsArray]);

  const setQnA = () => {
    const tmpArr = [];
    wordsArray.map((el) => tmpArr.push({ word: el.word, translation: el.wordTranslate }));
    const { qArray, aArray } = createQnAArrays(tmpArr);
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
