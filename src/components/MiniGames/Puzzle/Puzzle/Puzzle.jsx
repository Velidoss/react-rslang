import React, { useEffect, useState } from 'react';
import { Container, Button } from '@material-ui/core';
import getWords from '../../../../api/getWords';
import shuffleArr from '../../../../utils/shuffleArr';
import removeLast from '../../../../utils/removeLast';
import Blocks from '../Blocks/Blocks';

const Puzzle = () => {
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

  const getCurrentPhrase = () => (
    data[randomIndexes[movesCounter]]?.textExample.replace(/<\/?(b|i)>/gi, '')
  );

  useEffect(() => {
    getWords().then((words) => {
      setData(words);
      const randomArr = createArrOfRandomIndexes(words.length);
      setRandomIndexes(randomArr);
      setMovesCounter(movesCounter + 1);
    });
  }, []);

  useEffect(() => {
    if (data.length) {
      const nextPhrase = getCurrentPhrase().split(' ');
      setChoice(shuffleArr(nextPhrase));
      setChosen([]);
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

  const checkIsAnswerRight = () => {
    if (chosen.join(' ') === getCurrentPhrase()) {
      submitAnswer('right');
    } else {
      submitAnswer('wrong');
    }
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
    <Container>

      {
        movesCounter < data.length
          ? (
            <>
              <div>
                {data[randomIndexes[movesCounter]]?.textExampleTranslate}
              </div>
              <div>
                <Blocks blocks={chosen} action={(event) => moveTo(event, 'down')} />
              </div>
              <div>
                <Blocks blocks={choice} action={(event) => moveTo(event, 'up')} />
              </div>
              <Button onClick={checkIsAnswerRight}>
                check
              </Button>
            </>
          )
          : <div>Game completed!</div>
      }

      <div>{`Right answers: ${rightAnswers}`}</div>
      <div>{`Wrong answers: ${wrongAnswers}`}</div>
    </Container>
  );
};

export default Puzzle;
