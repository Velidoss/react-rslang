import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container } from '@material-ui/core';
//
import { TextBookHeader } from './TextBookHeader';
import { Dictionary } from './Dictionary';
import { DifficultWords } from './DifficultWords';
import { LearningWords } from './LearningWords';
import { DeletedWords } from './DeletedWords';
import { Loader } from '../_common';
//
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
import { fetchUserDeletedWords, fetchUserWords } from '../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../store/selectors/textBookSelector';
//
import { useAuth } from '../../contexts/AuthContext';
//
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/loсalStorage';
//
import styles from './TextBook.style';

const TextBook = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [groupNumber, setGroupNumber] = useState<number>(0);
  const {
    words,
    showControls,
    showTranslation,
  } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  const changePage = (_: any, number: number): void => {
    setPageNumber(number - 1);
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserWords(userId, token));
      dispatch(fetchUserDeletedWords(userId, token));
    }
  }, [userId, token, dispatch]);

  useEffect(() => {
    const textBookLocation = getLocalStorageItem('textBookLocation', { pageNumber, groupNumber });

    setPageNumber(textBookLocation.pageNumber);
    setGroupNumber(textBookLocation.groupNumber);
    setLocalStorageItem('textBookLocation', textBookLocation);
  }, []);

  useEffect(() => {
    setLocalStorageItem('textBookLocation', { pageNumber, groupNumber });
  }, [pageNumber, groupNumber]);

  useEffect((): void => {
    if (isAuth) {
      setLoading(false);
      dispatch(getTextBookWords(groupNumber, pageNumber, userId, token));
    } else {
      setLoading(false);
      dispatch(getTextBookWords(groupNumber, pageNumber));
    }
  }, [groupNumber, pageNumber, isAuth]);

  return (
    <Container maxWidth="xl" className={classes.root}>
      {loading && <Loader />}
      <div className="header-wrapper">
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
              groupNumber={groupNumber}
              changePage={changePage}
            />
          )}
        />
      </Switch>
    </Container>
  );
};

export { TextBook };
