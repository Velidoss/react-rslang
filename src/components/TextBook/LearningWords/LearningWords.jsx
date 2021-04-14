import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, List } from '@material-ui/core';
//
import { TextBookPagination, WordItem } from '../../_common';
//
import { fetchLearningWords } from '../../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';

const LearningWords = ({
  showControls, showTranslation,
}) => {
  const classes = {};
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const { learningWords, userWords } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  const changePage = (_, number) => { setPageNumber(number - 1); };

  useEffect(() => {
    dispatch(fetchLearningWords(userId, token, pageNumber));
  }, [userId, token]);

  return (
    <Grid container>
      <Grid container item className={classes.container}>
        <Grid item xs={12}>
          <List>
            {
              learningWords.map((word) => (
                <WordItem
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
            }
          </List>
        </Grid>
      </Grid>
      {
        learningWords.length > 20
          && (
          <Grid item container className={classes.paginationContainer}>
            <TextBookPagination
              wordsCount={learningWords.length}
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
