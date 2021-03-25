import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from '@material-ui/core';

const SavannahActive = ({ makeAnswer, words, finishGame }) => {
  const [wordGroup, setWordGroup] = useState(0);
  const [timeForAnswer, setTimeForAnswer] = useState(5);

  const onCLick = (group, answer) => {
    makeAnswer(group, answer);
    setWordGroup(wordGroup + 1);
    setTimeForAnswer(5);
  };

  useEffect(() => {
    if (wordGroup > 0 && wordGroup === words.length) {
      finishGame();
    }
  }, [wordGroup]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeForAnswer > 0) {
        setTimeForAnswer(timeForAnswer - 1);
      } else {
        onCLick(words[wordGroup], null);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeForAnswer]);

  return words.length > 0 && wordGroup < words.length ? (
    <Container>
      {
        words[wordGroup].filter((word) => word.question)
          .map((question) => <div key={question.id}>{question.word}</div>)
      }
      {timeForAnswer}
      {
      words[wordGroup].map((word) => (
        <Button key={word.id} onClick={() => onCLick(words[wordGroup], word.word)}>
          {word.translation}
        </Button>
      ))
    }
    </Container>
  ) : <div />;
};

SavannahActive.propTypes = {
  makeAnswer: PropTypes.func.isRequired,
  words: PropTypes.arrayOf({}).isRequired,
  finishGame: PropTypes.func.isRequired,
};

export default SavannahActive;
