import React, { useEffect, useState } from 'react';
import { Container, Button } from '@material-ui/core';

import getWords from '../../../../api/getWords';
import shuffleArr from '../../../../utils/shuffleArr';
import removeLast from '../../../../utils/removeLast';
import Blocks from '../Blocks/Blocks';
import Answers from '../Answers/Answers';
import useStyles from '../styles/styles';

const Puzzle = () => {
  const styles = useStyles();

  const [data, setData] = useState([]);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const [choice, setChoice] = useState([]);
  const [chosen, setChosen] = useState([]);

  const [movesCounter, setMovesCounter] = useState(-1);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

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
    getWords().then((words) => {
      setData(words);
      const randomArr = createArrOfRandomIndexes(words.length);
      setRandomIndexes(randomArr);
      setMovesCounter(movesCounter + 1);
    });
  }, []);

  useEffect(() => {
    setChosen([]);
    const nextPhrase = getCurrentPhrase();

    if (data.length && nextPhrase) {
      setChoice(shuffleArr(nextPhrase));
    }
  }, [movesCounter]);

  const submitAnswer = (rightOrWrong) => {
    if (rightOrWrong === 'right') {
      setRightAnswers(rightAnswers + 1);
      setMovesCounter(movesCounter + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
  };

  const convertForComparsion = (word) => word.toLowerCase().replace('.', '').replace(',', '');

  const checkIsAnswerRight = () => {
    const currentPhrase = getCurrentPhrase();

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

  return (
    <Container className={styles.root}>

      {
        movesCounter < data.length
          ? (
            <>
              <p className="task">
                {data[randomIndexes[movesCounter]]?.textExampleTranslate}
              </p>
              <div className="blocks">
                <Blocks
                  blocks={chosen}
                  action={(event) => moveTo(event, 'down')}
                />
              </div>
              <div className="blocks">
                <Blocks
                  blocks={choice}
                  action={(event) => moveTo(event, 'up')}
                />
              </div>
              <Button
                onClick={checkIsAnswerRight}
                variant="contained"
                color="secondary"
              >
                check
              </Button>
            </>
          )
          : <p>Game completed!</p>
      }

      <Answers
        right={rightAnswers}
        wrong={wrongAnswers}
      />
    </Container>
  );
};

export default Puzzle;
