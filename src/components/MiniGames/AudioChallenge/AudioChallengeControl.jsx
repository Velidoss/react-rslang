import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Button, CircularProgress, Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AudioChallengeActive from './AudioChallengeActive/AudioChallengeActive';
import AudioChallengeResult from './AudioChallengeResult/AudioChallengeResult';
import createQnAArrays from './audioChallengeUtils';
import getWords from '../../../api/getWords';

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

const AudioChallengeControl = () => {
  const [gameState, setGameState] = useState('GAME_STATE_LOADING');
  const [wordsArray, setWordsArray] = useState([]);
  const [answersState, setAnswersState] = useState({ right: [], wrong: [] });
  const [questionNum, setQuestionNum] = useState(0);
  const [questionsArr, setQuestionsArr] = useState([]);
  const [mixedAnswersArr, setMixedAnswersArr] = useState([]);

  const classes = useStyles();

  const location = useLocation();
  const groupNum = (location.state && location.state.group) ? location.state.group : 0;
  const pageNum = (location.state && location.state.page) ? location.state.page : 0;

  const getWordsArray = async () => {
    const data = await getWords(groupNum, pageNum);
    setWordsArray(data);
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
          <AudioChallengeActive
            questionsArr={questionsArr}
            mixedAnswersArr={mixedAnswersArr}
            questionNum={questionNum}
            setQuestionNum={setQuestionNum}
            answersState={answersState}
            setAnswersState={setAnswersState}
            finishGame={() => setGameState('GAME_STATE_RESULT')}
          />
        </Container>
      );
    case 'GAME_STATE_RESULT':
      return (
        <Container className={classes.wrapperContainer}>
          <AudioChallengeResult
            answersState={answersState}
            startGame={startGame}
          />
        </Container>
      );
  }
};

export default AudioChallengeControl;
