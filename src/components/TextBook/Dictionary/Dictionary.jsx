import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Grid, List } from '@material-ui/core';
//
import { WordItem, TextBookPagination } from '../../_common';
import { MiniGameLinks } from '../MiniGameLinks';
//
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';

const Dictionary = ({
  words,
  showControls,
  showTranslation,
  pageNumber,
  changePage,
}) => {
  const classes = {};
  const { userWords } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
    },
    isAuth,
  } = useAuth();

  return (
    <Grid container>
      <div className={classes.listWrapper}>
        <List>
          {words.map((word) => (
            <WordItem
              isAuth={isAuth}
              word={word}
              userWords={userWords}
              showControls={showControls}
              showTranslation={showTranslation}
              userId={userId}
              key={word._id}
            />
          ))}
        </List>
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
