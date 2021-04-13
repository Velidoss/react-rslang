import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
//
import textBookSelector from '../../store/selectors/textBookSelector';
import { getTextBookWords } from '../../store/textBookReducer/TextBookActionCreators';
//
import { WordList } from './WordList';
import { TextBookPagination } from './TextBookPagination';
import { TextBookHeader } from './TextBookHeader';
import { MiniGameLinks } from './MiniGameLinks';
import { Loader } from '../_common';
//
import styles from './TextBook.style';

const TextBook = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = React.useState(0);
  const [groupNumber, setGroupNumber] = React.useState(0);
  const { words, showControls, showTranslation } = useSelector(textBookSelector);

  const changePage = (_, number) => {
    setPageNumber(number - 1);
  };

  React.useEffect(() => {
    dispatch(getTextBookWords(groupNumber, pageNumber));
  }, [groupNumber, pageNumber]);

  return (
    <Container maxWidth="xl">
      {words.length === 0 && <Loader color="secondary" />}
      <div className={classes.headerWrapper}>
        <TextBookHeader
          groupNumber={groupNumber}
          setGroupNumber={setGroupNumber}
        />
      </div>
      <div className={classes.listWrapper}>
        <WordList
          words={words}
          showControls={showControls}
          showTranslation={showTranslation}
        />
      </div>
      <div className={classes.paginationWrapper}>
        <TextBookPagination
          currentPage={pageNumber}
          changePage={changePage}
        />
      </div>
      <div className={classes.linksWrapper}>
        <MiniGameLinks />
      </div>
    </Container>
  );
};

export { TextBook };
