import * as React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
//
import { WordItem } from './WordItem';
//
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';
//
import styles from './WordList.style';

const WordList = React.memo(({
  words,
  showControls,
  showTranslation,
  restoreCallback,
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
            restoreCallback={restoreCallback}
          />
        ))
      }
    </List>
  );
});

WordList.defaultProps = {
  restoreCallback: null,
};

WordList.propTypes = {
  words: PropTypes.instanceOf(Array).isRequired,
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
  restoreCallback: PropTypes.func,
};

export { WordList };
