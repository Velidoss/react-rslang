import React, { useEffect, useState } from 'react';
import {
  Grid, CircularProgress, List,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import textBookSelector from '../../store/selectors/textBookSelector';
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
import useTextBookStyles from './useTextBookStyles';
import TextBookPagination from './TextBookPagination/TextBookPagination';
import WordItem from './WordItem/WordItem';
import TextBookHeader from './TextBookHeader/TextBookHeader';
import { fetchUserWords } from '../../store/userWordsReducer/userWordsActionCreators';
import userWordsSelector from '../../store/selectors/userWordsSelector';
import { useAuth } from '../../contexts/AuthContext';

const TextBook = () => {
  const { userWords } = useSelector(userWordsSelector);

  const { auth: { userId, token } } = useAuth();

  const classes = useTextBookStyles();

  const [pageNumber, setPageNumber] = useState(0);

  const [groupNumber, setGroupNumber] = useState(0);

  const dispatch = useDispatch();

  const { words, showControls, showTranslation } = useSelector(textBookSelector);

  const changePage = (event, number) => setPageNumber(number - 1);

  useEffect(() => {
    console.log('getting user words!');
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
      <Grid container item className={classes.container}>
        <Grid item xs={12}>
          <List>
            {
            words.map((word) => (
              <WordItem
                word={word}
                userWords={userWords}
                showControls={showControls}
                showTranslation={showTranslation}
                userId={userId}
                token={token}
                key={word.id}
              />
            ))
          }
          </List>
        </Grid>
      </Grid>
      <Grid item container className={classes.paginationContainer}>
        <TextBookPagination
          currentPage={pageNumber}
          changePage={changePage}
        />
      </Grid>
    </Grid>

  );
};

export default TextBook;
