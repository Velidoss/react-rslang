import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Typography, Divider, IconButton, Box,
} from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';
import wordAudio from '../../../../common/wordAudio';

const useStyles = makeStyles(() => ({
  audioChallengeResultBox: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  audioChallengeResultP: {
    textAlign: 'center',
  },
  audioChallengeResultBtn: {
    margin: '1rem',
  },
  audioChallengeResultHr: {
    width: '40vw',
    margin: '1rem',
  },
  audioChallengeResultPRight: {
    borderBottom: '2px dashed #e03e87',
  },
  audioChallengeResultPWrong: {
    borderBottom: '2px dashed #2f2f2f',
  },
}));

const AudioChallengeResult = ({ answersState, startGame }) => {
  const calcRes = (r = 0, w = 0) => ((r / (r + w)) * 100) || 0;
  const percentage = calcRes(answersState.right.length, answersState.wrong.length).toFixed(0);

  const classes = useStyles();

  return (
    <>
      <Box className={classes.audioChallengeResultBox}>
        <Typography variant="h6" className={classes.audioChallengeResultPRight}>
          Верные ответы (
          {answersState.right.length}
          )
        </Typography>
        {
          answersState.right.map((answer) => (
            <Typography key={answer.word}>
              <IconButton onClick={() => wordAudio(answer.audio).play()}>
                <VolumeUpIcon />
              </IconButton>
              {answer.word}
              {' - '}
              {answer.translation}
            </Typography>
          ))
        }
      </Box>
      <Box className={classes.audioChallengeResultBox}>
        <Typography variant="h6" className={classes.audioChallengeResultPWrong}>
          Неверные ответы (
          {answersState.wrong.length}
          )
        </Typography>
        {
          answersState.wrong.map((answer) => (
            <Typography key={answer.word}>
              <IconButton onClick={() => wordAudio(answer.audio).play()}>
                <VolumeUpIcon />
              </IconButton>
              {answer.word}
              {' - '}
              {answer.translation}
            </Typography>
          ))
        }
      </Box>
      <Divider className={classes.audioChallengeResultHr} />
      <Typography className={classes.audioChallengeResultP}>
        <span>Итого: </span>
        <span>{`${percentage} / 100%.`}</span>
      </Typography>
      <Typography className={classes.audioChallengeResultP}>
        <Button
          onClick={startGame}
          variant="contained"
          color="secondary"
          className={classes.audioChallengeResultBtn}
        >
          Сыграть еще раз
        </Button>
      </Typography>
    </>
  );
};

AudioChallengeResult.propTypes = {
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
  startGame: PropTypes.func.isRequired,
};

export default AudioChallengeResult;
