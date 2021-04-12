import React, { useEffect, useState } from 'react';
import {
  Grid,
  Container,
  List,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import textBookSelector from '../../store/selectors/textBookSelector';
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
import useTextBookStyles from './useTextBookStyles';
import TextBookPagination from './TextBookPagination/TextBookPagination';
import WordItem from './WordItem/WordItem';
import TextBookHeader from './TextBookHeader/TextBookHeader';
import { MiniGameLinks } from './MiniGameLinks/MiniGameLinks';
import { Loader } from '../_common';

const TextBook = () => {
  const dispatch = useDispatch();
  const classes = useTextBookStyles();
  const [pageNumber, setPageNumber] = useState(0);
  const [groupNumber, setGroupNumber] = useState(0);
  const { words, showControls, showTranslation } = useSelector(textBookSelector);

  const changePage = (_, number) => setPageNumber(number - 1);

  useEffect(() => {
    dispatch(getTextBookWords(groupNumber, pageNumber));
  }, [groupNumber, pageNumber]);

  if (words.length === 0) {
    return (
      <Loader />
    );
  }

  return (
    <Container maxWidth="xl">
      <Grid container>
        <TextBookHeader groupNumber={groupNumber} setGroupNumber={setGroupNumber} />
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
            changePage={changePage}
          />
        </Grid>
        <Grid item xs={12}>
          <MiniGameLinks />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TextBook;
