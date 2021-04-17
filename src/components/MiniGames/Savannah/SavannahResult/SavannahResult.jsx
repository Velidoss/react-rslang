import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Typography, Box, IconButton, Divider, Container,
} from '@material-ui/core';
import { VolumeUp } from '@material-ui/icons';
import savannahStyles from '../savannahStyles';
import wordAudio from '../../../../common/wordAudio';

const SavannahResult = ({
  right, wrong, eraseGameState, answersState,
}) => {
  const calculatePercentage = (x, y) => ((x / (x + y)) * 100).toFixed(2);
  const classes = savannahStyles();

  return (
    <Container className={classes.wrapperContainer}>
      <Box className={classes.savannahResultBox}>
        <Typography variant="h6" className={classes.savannahResultPRight}>
          Верные ответы (
          {right}
          )
        </Typography>
        {
          answersState.right.map((answer) => (
            <Typography key={answer.word}>
              <IconButton onClick={() => wordAudio(answer.audio).play()}>
                <VolumeUp />
              </IconButton>
              {answer.word}
              {' - '}
              {answer.translation}
            </Typography>
          ))
        }
      </Box>
      <Box className={classes.savannahResultBox}>
        <Typography variant="h6" className={classes.savannahResultPWrong}>
          Неверные ответы (
          {answersState.wrong.length}
          )
        </Typography>
        {
          answersState.wrong.map((answer) => (
            <Typography key={answer.word}>
              <IconButton onClick={() => wordAudio(answer.audio).play()}>
                <VolumeUp />
              </IconButton>
              {answer.word}
              {' - '}
              {answer.translation}
            </Typography>
          ))
        }
      </Box>
      <Divider className={classes.savannahResultHr} />
      <Typography className={classes.savannahResultP}>
        <span>Итого: </span>
        <span>{`${calculatePercentage(right, wrong)} / 100%.`}</span>
      </Typography>
      <Typography className={classes.savannahResultP}>
        <Button
          onClick={eraseGameState}
          variant="contained"
          color="secondary"
          className={classes.resultButton}
        >
          Сыграть еще раз
        </Button>
      </Typography>
    </Container>
  );
};

SavannahResult.propTypes = {
  right: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  eraseGameState: PropTypes.func.isRequired,
  answersState: PropTypes.shape({
    right: PropTypes.arrayOf(PropTypes.shape({
      word: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    wrong: PropTypes.arrayOf(PropTypes.shape({
      word: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};

export default SavannahResult;
