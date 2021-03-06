import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
//
import { WordDeleteButton } from './WordDeleteButton';
import { WordInDifficultsButton } from './WordInDifficultsButton';
import { WordRestoreButton } from './WordRestoreButton';
//
import {
  addWordToDifficult,
  deleteWordFromDifficult,
  addWordToDeleted,
} from '../../../../store/textBookReducer/userWordsActionCreators';
//
import styles from './ControlButtons.style';

const ControlButtons = ({
  word,
  userId,
  isDifficult,
  token,
  isAuth,
  showControls,
  restoreCallback,
}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const [isLoading, toggleIsLoading] = React.useState(false);

  const handleDelete = () => {
    dispatch(addWordToDeleted(word.id, userId, token));
  };
  const handleAddToDifficult = () => {
    toggleIsLoading(true);
    dispatch(addWordToDifficult(word.id, userId, token));
    toggleIsLoading(false);
  };
  const handleRemoveFromDifficult = () => {
    toggleIsLoading(true);
    dispatch(deleteWordFromDifficult(word.id, userId, token));
    toggleIsLoading(false);
  };
  const handleRestore = () => {
    dispatch(restoreCallback(word._id, userId, token));
  };

  return (isAuth && showControls && (
    <div className={classes.root}>
      {restoreCallback
        ? <WordRestoreButton restoreWord={handleRestore} />
        : (
          <>
            <WordInDifficultsButton
              isDifficult={isDifficult}
              isLoading={isLoading}
              addWordToDifficult={handleAddToDifficult}
              removeWordFromDifficult={handleRemoveFromDifficult}
            />
            <WordDeleteButton deleteWord={handleDelete} />
          </>
        )
      }
    </div>
  ));
};

ControlButtons.defaultProps = {
  userId: null,
  token: null,
  restoreCallback: null,
};

ControlButtons.propTypes = {
  word: PropTypes.instanceOf(Object).isRequired,
  showControls: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isDifficult: PropTypes.bool.isRequired,

  userId: PropTypes.string,
  token: PropTypes.string,
  restoreCallback: PropTypes.func,
};

export { ControlButtons };
