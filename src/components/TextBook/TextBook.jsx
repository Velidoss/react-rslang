import React, { useEffect, useState } from 'react';
import {
  Grid, CircularProgress,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import textBookSelector from '../../store/selectors/textBookSelector';
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
import TextBookHeader from './TextBookHeader/TextBookHeader';
import { fetchUserDeletedWords, fetchUserWords } from '../../store/textBookReducer/userWordsActionCreators';
import { useAuth } from '../../contexts/AuthContext';
import Dictionary from './Dictionary/Dictionary';
import DifficultWords from './DifficultWords/DifficultWords';
import LearningWords from './LearningWords/LearningWords';
import DeletedWords from './DeletedWords/DeletedWords';

const TextBook = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { auth: { userId, token }, isAuth } = useAuth();

  const [pageNumber, setPageNumber] = useState(0);
  const [groupNumber, setGroupNumber] = useState(0);

  const {
    words, showControls, showTranslation, userWords,
  } = useSelector(textBookSelector);

  const changePage = (event, number) => setPageNumber(number - 1);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserWords(userId, token));
      dispatch(fetchUserDeletedWords(userId, token));
    }
  }, [userId, token]);

  useEffect(() => (
    isAuth
      ? dispatch(getTextBookWords(groupNumber, pageNumber, userId, token))
      : dispatch(getTextBookWords(groupNumber, pageNumber))
  ), [groupNumber, pageNumber]);

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
          path={`${match.url}/deleted`}
          render={() => (
            <DeletedWords
              showControls={showControls}
              showTranslation={showTranslation}
            />
          )}
        />
        <Route
          path={`${match.url}/difficult`}
          render={() => (
            <DifficultWords
              showControls={showControls}
              showTranslation={showTranslation}
            />
          )}
        />
        <Route
          path={`${match.url}/learning`}
          render={() => (
            <LearningWords
              showControls={showControls}
              showTranslation={showTranslation}
            />
          )}
        />
        <Route
          exact
          path={match.url}
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
