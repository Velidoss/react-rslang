import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  sprintResultBtn: {
    margin: '1rem',
  },
  sprintResultP: {
    textAlign: 'center',
  },
  sprintResultMT: {
    marginTop: '1rem',
  },
  sprintResultHr: {
    margin: '1rem',
  },
}));

const SprintResult = ({ answersState, points, startGame }) => {
  const calcRes = (r = 0, w = 0) => ((r / (r + w)) * 100) || 0;
  const percentage = calcRes(answersState.right.length, answersState.wrong.length).toFixed(0);

  const classes = useStyles();

  return (
    <>
      <Typography className={`${classes.sprintResultMT} ${classes.sprintResultP}`}>
        <span>Верные ответы: </span>
        <span>{`${answersState.right.join(', ') || 'нет'}.`}</span>
      </Typography>
      <Typography className={classes.sprintResultP}>
        <span>Неверные ответы: </span>
        <span>{`${answersState.wrong.join(', ') || 'нет'}.`}</span>
      </Typography>
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
        <NavLink to="/minigames">
          <Button
            variant="contained"
            color="primary"
            className={classes.sprintResultBtn}
          >
            Другие мини-игры
          </Button>
        </NavLink>
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
    right: arrayOf(PropTypes.string).isRequired,
    wrong: arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  points: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default SprintResult;
