import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
//
import { WordList, TextBookPagination } from '../../_common';
import { MiniGameLinks } from '../MiniGameLinks';

const Dictionary = ({
  words,
  showControls,
  showTranslation,
  pageNumber,
  changePage,
}) => {
  const classes = {};

  return (
    <Grid container>
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
    </Grid>

  );
};

Dictionary.propTypes = {
  words: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
  }).isRequired,
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
  pageNumber: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Dictionary;
