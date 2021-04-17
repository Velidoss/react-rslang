import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Button, IconButton, Typography, LinearProgress, Grid,
} from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import useCounter from '../hooks/useCounter';
import wordAudio from '../../../../common/wordAudio';
import savannahStyles from '../savannahStyles';

const SavannahActive = ({
  makeAnswer, words, finishGame,
}) => {
  const classes = savannahStyles();
  const [wordGroup, setWordGroup] = useState(0);
  const [timeForAnswer, setTimeForAnswer] = useState(5);

  const onCLick = (group, wordId, answeredWord) => {
    makeAnswer(group, wordId, answeredWord);
    setWordGroup(wordGroup + 1);
    setTimeForAnswer(5);
  };

  const timeOutAnswer = () => onCLick(
    words[wordGroup], null, words[wordGroup].filter((word) => word.question)[0],
  );

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
            <div key={question.id} className={classes.container}>
              <Typography component="h6" align="center" className={classes.word}>
                {question.word}
                <IconButton onClick={() => wordAudio(question.audio).play()}>
                  <VolumeUpIcon />
                </IconButton>
              </Typography>
            </div>
          ))
      }
      <LinearProgress className={classes.progress} variant="determinate" value={timeForAnswer * 20} />
      <Grid container className={classes.wordsList} spacing={4}>
        {
          words[wordGroup].map((word) => (
            <Button
              key={word.id}
              variant="outlined"
              className={classes.questionWord}
              onClick={() => onCLick(words[wordGroup], word.id, word)}
            >
              {word.wordTranslate}
            </Button>
          ))
        }
      </Grid>

    </Container>
  ) : <div />;
};

SavannahActive.propTypes = {
  makeAnswer: PropTypes.func.isRequired,
  words: PropTypes.arrayOf({

  }).isRequired,
  finishGame: PropTypes.func.isRequired,
};

export default SavannahActive;
