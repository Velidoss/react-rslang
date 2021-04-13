import React, { useEffect, useState } from 'react';
import {
  Container,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import textBookSelector from '../../store/selectors/textBookSelector';
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
import { fetchUserDeletedWords, fetchUserWords } from '../../store/textBookReducer/userWordsActionCreators';
import { useAuth } from '../../contexts/AuthContext';
import Dictionary from './Dictionary/Dictionary';
import DifficultWords from './DifficultWords/DifficultWords';
import LearningWords from './LearningWords/LearningWords';
import DeletedWords from './DeletedWords/DeletedWords';
import { TextBookHeader } from './TextBookHeader';
import { Loader } from '../_common';
//
import styles from './TextBook.style';

const TextBook = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { auth: { userId, token }, isAuth } = useAuth();

  const [pageNumber, setPageNumber] = useState(0);
  const [groupNumber, setGroupNumber] = useState(0);

  const {
    words, showControls, showTranslation,
  } = useSelector(textBookSelector);

  const changePage = (_, number) => {
    setPageNumber(number - 1);
  };

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

  return (
    <Container maxWidth="xl">
      {words.length === 0 && <Loader />}
      <div className={classes.headerWrapper}>
        <TextBookHeader
          groupNumber={groupNumber}
          setGroupNumber={setGroupNumber}
        />
      </div>
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
    </Container>
  );
};

export { TextBook };
