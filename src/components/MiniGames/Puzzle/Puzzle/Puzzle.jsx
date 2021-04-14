import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography } from '@material-ui/core';
import getWords from '../../../../api/getWords';
import shuffleArr from '../../../../utils/shuffleArr';
import removeLast from '../../../../utils/removeLast';
import Field from '../Field/Field';
import Buttons from '../Buttons/Buttons';
import Answers from '../Answers/Answers';
import DataAccessConstants from '../../../../constants/DataAccessConstants';
import puzzleConstants from '../../../../constants/puzzleConstants';

const { PAGES_QUANTITY } = DataAccessConstants;
const { ANIMATION_DURATION } = puzzleConstants;

const Puzzle = ({ difficulty, selectDifficulty, resetGame }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [data, setData] = useState([]);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [choice, setChoice] = useState([]);
  const [chosen, setChosen] = useState([]);

  const [currentPhrase, setCurrentPhrase] = useState('');

  const [movesCounter, setMovesCounter] = useState(-1);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

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
    const randomPage = Math.floor(Math.random() * PAGES_QUANTITY);

    getWords(difficulty, randomPage).then((words) => {
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

  const submitAnswer = (rightOrWrong) => {
    if (rightOrWrong === 'right') {
      setRightAnswers(rightAnswers + 1);
      setMovesCounter(movesCounter + 1);
    } else {
      addClassWrong();
      setWrongAnswers(wrongAnswers + 1);
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
    return <CircularProgress />;
  }

  return (
    <>
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
        selectDifficulty={selectDifficulty}
        resetGame={resetGame}
      />

      <Answers
        right={rightAnswers}
        wrong={wrongAnswers}
      />
    </>
  );
};

Puzzle.propTypes = {
  difficulty: PropTypes.number.isRequired,
  selectDifficulty: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default Puzzle;
