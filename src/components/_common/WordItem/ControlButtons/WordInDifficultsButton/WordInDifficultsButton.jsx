import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconButton, CircularProgress } from '@material-ui/core';
//
import { Star } from '@material-ui/icons';
//
import styles from './WordInDifficultButton.style';

const WordInDifficultsButton = React.memo(({
  isDifficult,
  isLoading,
  addWordToDifficult,
  removeWordFromDifficult,
}) => {
  const classes = styles();

  if (isLoading) {
    return (
      <CircularProgress />
    );
  }

  return (
    <IconButton
      className={clsx(isDifficult && classes.active)}
      onClick={isDifficult ? removeWordFromDifficult : addWordToDifficult}
    >
      <Star className={clsx(isDifficult && classes.activeIcon)} />
    </IconButton>
  );
});

WordInDifficultsButton.propTypes = {
  isDifficult: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addWordToDifficult: PropTypes.func.isRequired,
  removeWordFromDifficult: PropTypes.func.isRequired,
};

export { WordInDifficultsButton };
