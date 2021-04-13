import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useTextBookStyles from '../useTextBookStyles';
import DifficultWordsPagination from '../TextBookPagination/TextBookPagination';
import { useAuth } from '../../../contexts/AuthContext';
import WordItem from '../WordItem/WordItem';
import textBookSelector from '../../../store/selectors/textBookSelector';

const Dictionary = ({
  words, showControls, showTranslation, pageNumber, changePage,
}) => {
  const classes = useTextBookStyles();

  const { auth: { userId, token }, isAuth } = useAuth();

  const { userWords } = useSelector(textBookSelector);

  return (
    <Grid container>
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
            isAuth={isAuth}
            token={token}
            key={word.id}
          />
        ))
      }
          </List>
        </Grid>
      </Grid>
      <Grid item container className={classes.paginationContainer}>
        <DifficultWordsPagination
          currentPage={pageNumber}
          changePage={changePage}
        />
      </Grid>
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
