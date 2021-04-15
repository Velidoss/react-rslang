import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Button, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  audioChallengeResultMT: {
    marginTop: '1rem',
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
  audioChallengeResultSpanR: {
    borderBottom: '2px dashed #e03e87',
  },
  audioChallengeResultSpanW: {
    borderBottom: '2px dashed #2f2f2f',
  },
}));

const AudioChallengeResult = ({ answersState, startGame }) => {
  const calcRes = (r = 0, w = 0) => ((r / (r + w)) * 100) || 0;
  const percentage = calcRes(answersState.right.length, answersState.wrong.length).toFixed(0);

  const classes = useStyles();

  return (
    <>
      <Typography className={`${classes.audioChallengeResultMT} ${classes.audioChallengeResultP}`}>
        <span className={classes.audioChallengeResultSpanR}>
          Верные ответы (
          {answersState.right.length}
          ):
        </span>
        <span>{` ${answersState.right.join(', ') || 'нет'}.`}</span>
      </Typography>
      <Typography className={classes.audioChallengeResultP}>
        <span className={classes.audioChallengeResultSpanW}>
          Неверные ответы (
          {answersState.wrong.length}
          ):
        </span>
        <span>{` ${answersState.wrong.join(', ') || 'нет'}.`}</span>
      </Typography>
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
    right: arrayOf(PropTypes.string).isRequired,
    wrong: arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  startGame: PropTypes.func.isRequired,
};

export default AudioChallengeResult;
