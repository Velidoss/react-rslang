import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@material-ui/core';
import savannahStyles from '../savannahStyles';

const SavannahResult = ({ right, wrong, eraseGameState }) => {
  const calculatePercentage = (x, y) => ((x / (x + y)) * 100).toFixed(2);
  const classes = savannahStyles();

  return (
    <Grid direction="column" align="center">
      <Grid container item direction="column">
        <Typography variant="h6" className={classes.resultText}>{`${calculatePercentage(right, wrong)}%`}</Typography>
        <Typography variant="h6" className={classes.resultText}>{`Верные ответы: ${right}`}</Typography>
        <Typography variant="h6" className={classes.resultText}>{`Неверные ответы: ${wrong}`}</Typography>
      </Grid>

      <Button
        onClick={eraseGameState}
        variant="contained"
        color="secondary"
        className={classes.resultButton}
      >
        Сыграть еще раз
      </Button>
    </Grid>
  );
};

SavannahResult.propTypes = {
  right: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  eraseGameState: PropTypes.func.isRequired,
};

export default SavannahResult;
