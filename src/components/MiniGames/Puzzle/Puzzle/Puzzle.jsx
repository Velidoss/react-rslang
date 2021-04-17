import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import getWords from '../../../../api/getWords';
import shuffleArr from '../../../../utils/shuffleArr';
import removeLast from '../../../../utils/removeLast';
import Field from '../Field/Field';
import Buttons from '../Buttons/Buttons';
import Result from '../Result/Result';
import puzzleConstants from '../../../../constants/puzzleConstants';
import { useAuth } from '../../../../contexts/AuthContext';
import { setWordGameStatistics } from '../../../../store/textBookReducer/userWordsActionCreators';
import useStyles from '../styles/styles';

const { ANIMATION_DURATION } = puzzleConstants;

const Puzzle = ({ groupNum, pageNum, resetGame }) => {
  const dispatch = useDispatch();
  const { auth: { token, userId }, isAuth } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  const [data, setData] = useState([]);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [choice, setChoice] = useState([]);
  const [chosen, setChosen] = useState([]);

  const [currentPhrase, setCurrentPhrase] = useState('');

  const [movesCounter, setMovesCounter] = useState(-1);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answersState, setAnswersState] = useState({ right: [], wrong: [] });

  const styles = useStyles();

  const isGameActive = () => movesCounter < data.length;

  const checkButton = useRef();
  const addClassWrong = () => {
    checkButton.current.classList.add('check__button-wrong');

    setTimeout(() => {
      checkButton.current.classList.remove('check__button-wrong');
    }, ANIMATION_DURATION);
  };

  const createArrOfRandomIndexes = (len) => {
    const res = Array(len).fill(0).map((item, index) => index);
    return shuffleArr(res);
  };

  const removeHtmlTags = (phrase) => phrase.replace(/<\/?(b|i)>/gi, '');

  const getCurrentPhrase = () => {
    const phrase = data[randomIndexes[movesCounter]]?.textExample;
    if (phrase) {
      return removeHtmlTags(phrase).split(' ');
    }

    return null;
  };

  useEffect(() => {
    getWords(groupNum, pageNum).then((words) => {
      setData(words);
      const randomArr = createArrOfRandomIndexes(words.length);
      setRandomIndexes(randomArr);
      setMovesCounter(movesCounter + 1);
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    setChosen([]);
    const nextPhrase = getCurrentPhrase();

    if (data.length && nextPhrase) {
      setChoice(shuffleArr(nextPhrase));
      setCurrentPhrase(nextPhrase);
    }
  }, [movesCounter]);

  const isAnswersStateIncludesObject = (wordObj) => (
    answersState.wrong.some((word) => word.word === wordObj.word)
  );

  const submitAnswer = (rightOrWrong) => {
    const wordObj = {
      word: data[randomIndexes[movesCounter]].word,
      wordTranslate: data[randomIndexes[movesCounter]].wordTranslate,
      audio: data[randomIndexes[movesCounter]].audio,
    };

    if (rightOrWrong === 'right') {
      if (isAuth) {
        dispatch(setWordGameStatistics(userId, token, data[randomIndexes[movesCounter]].id, 'puzzle', 'right'));
      }
      setRightAnswers(rightAnswers + 1);
      setMovesCounter(movesCounter + 1);

      if (!isAnswersStateIncludesObject(wordObj)) {
        setAnswersState({
          ...answersState,
          right: [...answersState.right, wordObj],
        });
      }
    } else {
      if (isAuth) {
        dispatch(setWordGameStatistics(userId, token, data[randomIndexes[movesCounter]].id, 'puzzle', 'wrong'));
      }
      addClassWrong();
      setWrongAnswers(wrongAnswers + 1);

      if (!isAnswersStateIncludesObject(wordObj)) {
        setAnswersState({
          ...answersState,
          wrong: [...answersState.wrong, wordObj],
        });
      }
    }
  };

  const convertForComparsion = (word) => word.toLowerCase().replace('.', '').replace(',', '');

  const checkIsAnswerRight = () => {
    if (checkButton.current.classList.contains('check__button-wrong')) {
      return null;
    }

    if (currentPhrase.length !== chosen.length) {
      return submitAnswer('wrong');
    }

    for (let i = 0; i < currentPhrase.length; i += 1) {
      if (convertForComparsion(currentPhrase[i]) !== convertForComparsion(chosen[i])) {
        return submitAnswer('wrong');
      }
    }

    return submitAnswer('right');
  };

  const moveTo = (event, upOrDown) => {
    const word = event.target.textContent;

    if (upOrDown === 'down') {
      setChosen(removeLast(chosen, word));
      setChoice(choice.concat(word));
    } else {
      setChoice(removeLast(choice, word));
      setChosen(chosen.concat(word));
    }
  };

  if (!isLoaded) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container className={styles.root}>
      {
        isGameActive()
          ? (
            <>
              <Typography variant="h5">
                {data[randomIndexes[movesCounter]]?.textExampleTranslate}
              </Typography>
              <Field
                chosen={chosen}
                choice={choice}
                moveTo={moveTo}
              />
            </>
          )
          : (
            <Typography variant="h5">
              Игра завершена!
            </Typography>
          )
      }

      <Buttons
        isGameActive={isGameActive()}
        checkIsAnswerRight={checkIsAnswerRight}
        checkButton={checkButton}
        resetGame={resetGame}
        rightQuantity={rightAnswers}
        wrongQuantity={wrongAnswers}
      />

      {
        isGameActive()
          ? null
          : <Result answersState={{ ...answersState }} />
      }

    </Container>
  );
};

Puzzle.propTypes = {
  groupNum: PropTypes.number.isRequired,
  pageNum: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default Puzzle;
