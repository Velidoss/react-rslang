import React, { useState, useEffect } from 'react';
import { Container, Button } from '@material-ui/core';
import SprintActive from './SprintActive/SprintActive';
import SprintResult from './SprintResult/SprintResult';
import getWords from '../../../api/getWords';

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

const SprintControl = () => {
  const [gameState, setGameState] = useState('GAME_STATE_START');
  const [wordsArray, setWordsArray] = useState([]);
  const [answersState, setAnswersState] = useState({ right: [], wrong: [] });
  const [questionNum, setQuestionNum] = useState(0);
  const [questionsArr, setQuestionsArr] = useState([]);
  const [mixedAnswersArr, setMixedAnswersArr] = useState([]);

  const getWordsArray = async () => {
    const data = await getWords();
    setWordsArray(data);
  };

  useEffect(() => {
    getWordsArray();
  }, []);

  useEffect(() => {
    if (!wordsArray || !wordsArray.length) return;
    const tmpArr = [];
    wordsArray.map((el) => tmpArr.push({ word: el.word, translation: el.wordTranslate }));
    setQuestionsArr(tmpArr);
    setMixedAnswersArr(shuffle(tmpArr));
  }, [wordsArray]);

  const startGame = () => {
    setGameState('GAME_STATE_ACTIVE');
    setAnswersState({ right: [], wrong: [] });
    setQuestionNum(0);
  };

  switch (gameState) {
    default:
    case 'GAME_STATE_START':
      return (
        <Container>
          <Button onClick={startGame}>
            Start
          </Button>
        </Container>
      );
    case 'GAME_STATE_ACTIVE':
      return (
        <SprintActive
          questionsArr={questionsArr}
          mixedAnswersArr={mixedAnswersArr}
          questionNum={questionNum}
          setQuestionNum={setQuestionNum}
          answersState={answersState}
          setAnswersState={setAnswersState}
          finishGame={() => setGameState('GAME_STATE_RESULT')}
        />
      );
    case 'GAME_STATE_RESULT':
      return (
        <SprintResult
          answersState={answersState}
          startGame={startGame}
        />
      );
  }
};

export default SprintControl;
