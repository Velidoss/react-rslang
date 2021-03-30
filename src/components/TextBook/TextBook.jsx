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
import TextBookTitle from './TextBookTitle/TextBookTitle';

const TextBook = () => {
  const classes = useTextBookStyles();

  const [pageNumber, setPageNumber] = useState(0);

  // const [groupNumber, setGroupNumber] = useState(0);

  const dispatch = useDispatch();
  const { words, showControls, showTranslation } = useSelector(textBookSelector);

  useEffect(() => {
    dispatch(getTextBookWords(0, pageNumber));
  }, [pageNumber]);

  if (words.length === 0) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Grid container>
      <TextBookTitle />
      <Grid container item className={classes.container}>
        <Grid item xs={12}>
          <List>
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
        </Grid>
      </Grid>
      <Grid item container className={classes.paginationContainer}>
        <TextBookPagination
          currentPage={pageNumber}
          changePage={(event, number) => setPageNumber(number)}
        />
      </Grid>
    </Grid>

  );
};

export default TextBook;
