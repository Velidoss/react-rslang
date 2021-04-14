import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  List,
} from '@material-ui/core';
//
import { MiniGameLinks } from '../MiniGameLinks';
//
import { WordItem, TextBookPagination } from '../../_common';
//
import {
  deleteWordFromDifficult,
  fetchUserDifficultWords,
} from '../../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';

const DifficultWords = ({
  showControls, showTranslation,
}) => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const { difficultWords, userWords } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  const changePage = (_, number) => setPageNumber(number - 1);

  useEffect(() => {
    dispatch(fetchUserDifficultWords(userId, token, pageNumber));
  }, [userId, token]);

  return (
    <>
      <div className="list-wrapper">
        <List className="list">
          {
            difficultWords.map((word) => (
              <WordItem
                key={word._id}
                word={word}
                userWords={userWords}
                showControls={showControls}
                showTranslation={showTranslation}
                userId={userId}
                isAuth={isAuth}
                token={token}
                restoreCallback={deleteWordFromDifficult}
              />
            ))
          }
        </List>
      </div>
      {
        difficultWords.length > 20
          && (
            <div className="pagination-wrapper">
              <TextBookPagination
                wordsCount={difficultWords.length}
                currentPage={pageNumber}
                changePage={changePage}
              />
            </div>
          )
      }
      <div className="links-wrapper">
        <MiniGameLinks />
      </div>
    </>
  );
};

DifficultWords.propTypes = {
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
};

export { DifficultWords };
