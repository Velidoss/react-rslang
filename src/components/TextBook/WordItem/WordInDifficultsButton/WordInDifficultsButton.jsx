import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, CircularProgress } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import useWordInDifficultsStyles from './useWordInDifficultsStyles';

const WordInDifficultsButton = (
  {
    isDifficult, isLoading, addWordToDifficult, removeWordFromDifficult,
  },
) => {
  const classes = useWordInDifficultsStyles();

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  return (isDifficult ? (
    <IconButton
      className={classes.active}
      onClick={removeWordFromDifficult}
    >
      <Star className={classes.activeIcon} />
    </IconButton>
  )
    : (
      <IconButton
        onClick={addWordToDifficult}
      >
        <Star />
      </IconButton>
    ));
};

WordInDifficultsButton.propTypes = {
  isDifficult: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addWordToDifficult: PropTypes.func.isRequired,
  removeWordFromDifficult: PropTypes.func.isRequired,
};

export default WordInDifficultsButton;
