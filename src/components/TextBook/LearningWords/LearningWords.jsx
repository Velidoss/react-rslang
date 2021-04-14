import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, List } from '@material-ui/core';
//
import { TextBookPagination, WordList } from '../../_common';
//
import { fetchUserDifficultWords } from '../../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';

const LearningWords = ({
  showControls, showTranslation,
}) => {
  const classes = {};
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const { difficultWords, userWords } = useSelector(textBookSelector);
  const { auth: { userId, token } } = useAuth();

  const changePage = (_, number) => { setPageNumber(number - 1); };

  useEffect(() => {
    dispatch(fetchUserDifficultWords(userId, token, pageNumber));
  }, [userId, token]);

  return (
    <Grid container>
      <Grid container item className={classes.container}>
        <Grid item xs={12}>
          <WordList
            words={difficultWords}
            userWords={userWords}
            showControls={showControls}
            showTranslation={showTranslation}
          />
          <List>
            {/* {
              difficultWords.map((word) => (
                <UserWordItem
                  word={word}
                  userWords={userWords}
                  showControls={showControls}
                  showTranslation={showTranslation}
                  userId={userId}
                  isAuth={isAuth}
                  token={token}
                  key={word._id}
                />
              ))
      } */}
          </List>
        </Grid>
      </Grid>
      {
        difficultWords.length > 20
          && (
          <Grid item container className={classes.paginationContainer}>
            <TextBookPagination
              wordsCount={difficultWords.length}
              currentPage={pageNumber}
              changePage={changePage}
            />
          </Grid>
          )
      }
    </Grid>

  );
};

LearningWords.propTypes = {
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
};

export default LearningWords;
