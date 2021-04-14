import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, List, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import useTextBookStyles from '../useTextBookStyles';
import DeletedWordsPagination from './DeletedWordsPagination/DeletedWordsPagination';
import { useAuth } from '../../../contexts/AuthContext';
import { fetchUserDeletedWords, removeWordFromDeleted } from '../../../store/textBookReducer/userWordsActionCreators';
import UserWordItem from '../../_common/UserWordItem';
import textBookSelector from '../../../store/selectors/textBookSelector';

const DeletedWords = ({
  showControls, showTranslation,
}) => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const classes = useTextBookStyles();
  const { deletedWords, userWords } = useSelector(textBookSelector);

  const { auth: { userId, token }, isAuth } = useAuth();

  const changePage = (event, number) => setPageNumber(number - 1);

  useEffect(() => {
    dispatch(fetchUserDeletedWords(userId, token, pageNumber));
  }, [userId, token]);

  if (deletedWords.length < 1) {
    return <CircularProgress />;
  }

  return (
    <Grid container>
      <Grid container item className={classes.container}>
        <Grid item xs={12}>
          <List>
            {
              deletedWords.map((word) => (
                <UserWordItem
                  isAuth={isAuth}
                  word={word}
                  userWords={userWords}
                  showControls={showControls}
                  showTranslation={showTranslation}
                  userId={userId}
                  key={word._id}
                  restoreCallback={() => dispatch(removeWordFromDeleted(word._id, userId, token))}
                />
              ))
            }
          </List>
        </Grid>
      </Grid>
      {
        deletedWords.length > 20
          && (
          <Grid item container className={classes.paginationContainer}>
            <DeletedWordsPagination
              wordsCount={deletedWords.length}
              currentPage={pageNumber}
              changePage={changePage}
            />
          </Grid>
          )
      }
    </Grid>
  );
};

DeletedWords.propTypes = {
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
};

export default DeletedWords;
