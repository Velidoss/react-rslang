import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
//
import { WordItem } from './WordItem';
//
import styles from './WordList.style';

const WordList = React.memo(({ words, showControls, showTranslation }) => {
  const classes = styles();

  return (
    <List className={classes.root}>
      {
        words.map((word) => (
          <WordItem
            word={word}
            showControls={showControls}
            showTranslation={showTranslation}
            key={word.id}
          />
        ))
      }
    </List>
  );
});

WordList.propTypes = {
  words: PropTypes.instanceOf(Array).isRequired,
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
};

export { WordList };
