import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, IconButton } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import useCounter from '../../Savannah/hooks/useCounter';
import wordAudio from '../../../../common/wordAudio';
import DataAccessContants from '../../../../constants/DataAccessContants';

const PuzzleActive = ({ makeAnswer, words, finishGame }) => {
  console.log(makeAnswer);
  console.log(words);
  console.log(finishGame);

  const [wordGroup, setWordGroup] = useState(0);
  const [timeForAnswer, setTimeForAnswer] = useState(5);

  const { ApiUrl } = DataAccessContants;

  const onCLick = (group, answer) => {
    makeAnswer(group, answer);
    setWordGroup(wordGroup + 1);
    setTimeForAnswer(5);
  };

  const timeOutAnswer = () => onCLick(words[wordGroup], null);

  useEffect(() => {
    if (wordGroup > 0 && wordGroup === words.length) {
      finishGame();
    }
  }, [wordGroup]);

  useCounter({ timeForAnswer, setTimeForAnswer, timeOutAnswer });

  return words.length > 0 && wordGroup < words.length ? (
    <Container>
      {
        words[wordGroup].filter((word) => word.question)
          .map((question) => (
            <div key={question.id}>
              {question.word}
              {' '}
              <IconButton onClick={() => wordAudio(`${ApiUrl}/${question.audio}`).play()}>
                <VolumeUpIcon />
              </IconButton>
            </div>
          ))
      }
      {timeForAnswer}
      {
        words[wordGroup].map((word) => (
          <Button key={word.id} onClick={() => onCLick(words[wordGroup], word.word)}>
            {word.wordTranslate}
          </Button>
        ))
      }
    </Container>
  ) : <div />;
};

PuzzleActive.propTypes = {
  makeAnswer: PropTypes.func.isRequired,
  words: PropTypes.arrayOf({}).isRequired,
  finishGame: PropTypes.func.isRequired,
};

export default PuzzleActive;
