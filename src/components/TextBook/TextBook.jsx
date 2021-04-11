import React, { useEffect, useState } from 'react';
import {
  Grid, CircularProgress,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import textBookSelector from '../../store/selectors/textBookSelector';
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
import TextBookHeader from './TextBookHeader/TextBookHeader';
import { fetchUserWords } from '../../store/userWordsReducer/userWordsActionCreators';
import userWordsSelector from '../../store/selectors/userWordsSelector';
import { useAuth } from '../../contexts/AuthContext';
import Dictionary from './Dictionary/Dictionary';
import DifficultWords from './DifficultWords/DifficultWords';

const TextBook = () => {
  const dispatch = useDispatch();
  const { userWords } = useSelector(userWordsSelector);
  const { auth: { userId, token } } = useAuth();

  const [pageNumber, setPageNumber] = useState(0);
  const [groupNumber, setGroupNumber] = useState(0);

  const { words, showControls, showTranslation } = useSelector(textBookSelector);

  const changePage = (event, number) => setPageNumber(number - 1);

  useEffect(() => {
    dispatch(fetchUserWords(userId, token));
  }, [userId, token]);

  useEffect(() => {
    dispatch(getTextBookWords(groupNumber, pageNumber));
  }, [groupNumber, pageNumber]);

  if (words.length === 0 && userWords.length === 0) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Grid container>
      <TextBookHeader groupNumber={groupNumber} setGroupNumber={setGroupNumber} />
      <Switch>
        <Route
          path="/textbook/difficult"
          render={() => (
            <DifficultWords
              showControls={showControls}
              showTranslation={showTranslation}
            />
          )}
        />
        <Route
          exact
          path="/textbook"
          render={() => (
            <Dictionary
              words={words}
              showControls={showControls}
              showTranslation={showTranslation}
              pageNumber={pageNumber}
              changePage={changePage}
            />
          )}
        />
      </Switch>
    </Grid>

  );
};

export default TextBook;
