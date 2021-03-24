import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from '@material-ui/core';

const SavannahActive = ({ makeAnswer, words, finishGame }) => {
  const [wordGroup, setWordGroup] = useState(0);

  const onCLick = (word) => {
    makeAnswer(word);
    setWordGroup(wordGroup + 1);
  };

  useEffect(() => {
    if (wordGroup === words.length) {
      finishGame();
    }
  }, [wordGroup]);

  return words.length > 0 && wordGroup !== words.length - 1 ? (
    <Container>
      {
        words[wordGroup].filter((word) => word.question)
          .map((question) => <div key={question.id}>{question.word}</div>)
      }
      {
      words[wordGroup].map((word) => (
        <Button key={word.id} onClick={() => onCLick(word.word)}>{word.translation}</Button>
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
