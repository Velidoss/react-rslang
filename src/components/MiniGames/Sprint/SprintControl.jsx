import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Button, CircularProgress, Container, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SprintActive from './SprintActive/SprintActive';
import SprintResult from './SprintResult/SprintResult';
import {
  createQnAArrays, getUserWordsSprint, getDeletedWordsSprint, getDifficultWordsSprint,
} from './sprintUtils';
import getAllWordsCurrPrevPages from '../../../utils/getAllWordsCurrPrevPages';
import { useAuth } from '../../../contexts/AuthContext';

const useStyles = makeStyles(() => ({
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

  const { auth: { token, userId }, isAuth } = useAuth();

  const location = useLocation();
  const groupNum = (location.state && location.state.group) ? location.state.group : 0;
  const pageNum = (location.state && location.state.page) ? location.state.page : 0;
  const linkSrc = (location.state && location.state.linkSrc) ? location.state.linkSrc : 0;

  const getWordsArray = async () => {
    let data = [];
    if (isAuth) {
      if (linkSrc === 'deleted') {
        data = await getDeletedWordsSprint(userId, token, pageNum);
      } else if (linkSrc === 'difficult') {
        data = await getDifficultWordsSprint(userId, token, pageNum);
      } else {
        data = await getUserWordsSprint(userId, token, groupNum, pageNum);
      }
    } else {
      data = await getAllWordsCurrPrevPages(groupNum, pageNum);
    }
    if (!data.length) {
      setGameState('GAME_STATE_ERROR');
    } else {
      setWordsArray(data);
    }
  };

  useEffect(() => {
    setGameState('GAME_STATE_LOADING');
    getWordsArray();
  }, [groupNum, pageNum]);

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
          <CircularProgress color="secondary" />
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
    case 'GAME_STATE_ERROR':
      return (
        <Container className={classes.wrapperContainer}>
          <Typography>
            Ой, что-то пошло не так...
            <br />
            Быть может, все слова уже выучены? :)
          </Typography>
        </Container>
      );
  }
};

export default SprintControl;
