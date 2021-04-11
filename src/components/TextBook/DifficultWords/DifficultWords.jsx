import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import useTextBookStyles from '../useTextBookStyles';
import userWordsSelector from '../../../store/selectors/userWordsSelector';
import TextBookPagination from '../TextBookPagination/TextBookPagination';
import { useAuth } from '../../../contexts/AuthContext';
import { fetchUserDifficultWords } from '../../../store/userWordsReducer/userWordsActionCreators';
import DifficultWordItem from '../DifficultWordItem/DifficultWordItem';

const DifficultWords = ({
  showControls, showTranslation,
}) => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const classes = useTextBookStyles();
  const { difficultWords, userWords } = useSelector(userWordsSelector);
  console.log(difficultWords);

  const { auth: { userId, token }, isAuth } = useAuth();

  const changePage = (event, number) => setPageNumber(number - 1);

  useEffect(() => {
    dispatch(fetchUserDifficultWords(userId, token, pageNumber));
  }, [userId, token]);

  return (
    <Grid container>
      <Grid container item className={classes.container}>
        <Grid item xs={12}>
          <List>
            {
        difficultWords.map((word) => (
          <DifficultWordItem
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
        <TextBookPagination
          currentPage={pageNumber}
          changePage={changePage}
        />
      </Grid>
    </Grid>

  );
};

DifficultWords.propTypes = {
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
};

export default DifficultWords;
