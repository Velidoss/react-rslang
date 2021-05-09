import * as React from 'react';
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
import ITextBookWord from '../../../../interfaces/ITextBookWord';

interface ControlButtonsProps {
  word: ITextBookWord;
  userId?: string;
  isDifficult?: boolean;
  token?: string;
  isAuth: boolean;
  showControls: boolean;
  restoreCallback?: (wordId: string, userId: string, token: string) => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
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
    if (restoreCallback && userId && token) {
      dispatch(restoreCallback(word._id, userId, token));
    }
  };

  return isAuth && showControls ? (
    <div className={classes.root}>
      {restoreCallback ? (
        <WordRestoreButton restoreWord={handleRestore} />
      ) : (
        <>
          <WordInDifficultsButton
            isDifficult={isDifficult}
            isLoading={isLoading}
            addWordToDifficult={handleAddToDifficult}
            removeWordFromDifficult={handleRemoveFromDifficult}
          />
          <WordDeleteButton deleteWord={handleDelete} />
        </>
      )}
    </div>
  ) : null;
};

export { ControlButtons };
