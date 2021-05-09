/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import { IconButton, Tooltip, CircularProgress } from '@material-ui/core';
//
import { Star } from '@material-ui/icons';
//
import styles from './WordInDifficultButton.style';

interface WordInDifficultsButtonProps {
  isDifficult?: boolean;
  isLoading: boolean;
  addWordToDifficult(): void;
  removeWordFromDifficult(): void;
}

const WordInDifficultsButton = React.memo<WordInDifficultsButtonProps>(
  ({ isDifficult, isLoading, addWordToDifficult, removeWordFromDifficult }) => {
    const classes = styles();

    if (isLoading) {
      return <CircularProgress color="secondary" />;
    }

    return (
      <Tooltip title="сложные">
        <IconButton
          className={clsx(isDifficult && classes.active)}
          onClick={isDifficult ? removeWordFromDifficult : addWordToDifficult}
        >
          <Star className={clsx(isDifficult && classes.activeIcon)} />
        </IconButton>
      </Tooltip>
    );
  },
);

export { WordInDifficultsButton };
