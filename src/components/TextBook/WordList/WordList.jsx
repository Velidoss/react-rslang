import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
//
import { useSelector } from 'react-redux';
import { WordItem } from './WordItem';
//
import styles from './WordList.style';
import { useAuth } from '../../../contexts/AuthContext';
import textBookSelector from '../../../store/selectors/textBookSelector';

const WordList = React.memo(({
  words, showControls, showTranslation,
}) => {
  const classes = styles();

  const { userWords } = useSelector(textBookSelector);

  const { auth: { userId, token }, isAuth } = useAuth();

  return (
    <List className={classes.root}>
      {
        words.map((word) => (
          <WordItem
            word={word}
            userWords={userWords}
            showControls={showControls}
            showTranslation={showTranslation}
            userId={userId}
            isAuth={isAuth}
            token={token}
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
