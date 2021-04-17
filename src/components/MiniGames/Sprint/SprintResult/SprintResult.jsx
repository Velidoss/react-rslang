import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Typography, Divider, Box, IconButton,
} from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';
import wordAudio from '../../../../common/wordAudio';

const useStyles = makeStyles(() => ({
  sprintResultBox: {
    marginTop: '1rem',
    textAlign: 'center',
  },
  sprintResultBtn: {
    margin: '1rem',
  },
  sprintResultP: {
    textAlign: 'center',
  },
  sprintResultHr: {
    width: '40vw',
    margin: '1rem',
  },
  sprintResultPRight: {
    borderBottom: '2px dashed #e03e87',
  },
  sprintResultPWrong: {
    borderBottom: '2px dashed #2f2f2f',
  },
}));

const SprintResult = ({ answersState, points, startGame }) => {
  const calcRes = (r = 0, w = 0) => ((r / (r + w)) * 100) || 0;
  const percentage = calcRes(answersState.right.length, answersState.wrong.length).toFixed(0);

  const classes = useStyles();

  return (
    <>
      <Box className={classes.sprintResultBox}>
        <Typography variant="h6" className={classes.sprintResultPRight}>
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
      <Box className={classes.sprintResultBox}>
        <Typography variant="h6" className={classes.sprintResultPWrong}>
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
      <Divider className={classes.sprintResultHr} />
      <Typography className={classes.sprintResultP}>
        <span>Итого: </span>
        <span>{`${percentage} / 100%.`}</span>
      </Typography>
      <Typography className={classes.sprintResultP}>
        <span>Очки: </span>
        <span>{`${points}.`}</span>
      </Typography>
      <Typography className={classes.sprintResultP}>
        <Button
          onClick={startGame}
          variant="contained"
          color="secondary"
          className={classes.sprintResultBtn}
        >
          Сыграть еще раз
        </Button>
      </Typography>
    </>
  );
};

SprintResult.propTypes = {
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
  points: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default SprintResult;
