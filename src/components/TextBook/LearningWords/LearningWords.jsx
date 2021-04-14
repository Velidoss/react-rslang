import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
//
import LearningWordsPagination from './LearningWordsPagination/LearningWordsPagination';
import { WordItem } from '../../_common';
//
import { fetchLearningWords } from '../../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';

const LearningWords = ({
  showTranslation,
}) => {
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

  useEffect(() => userId && token && dispatch(
    fetchLearningWords(userId, token, pageNumber),
  ), [userId, token]);

  return (
    <>
      <div className="list-wrapper">
        <List className="list">
          {
            learningWords.map((word) => (
              <WordItem
                key={word._id}
                word={word}
                userWords={userWords}
                showControls={false}
                showTranslation={showTranslation}
                userId={userId}
                isAuth={isAuth}
                token={token}
              />
            ))
          }
        </List>
      </div>
      {
        learningWords.length > 20
          && (
            <div className="pagination-wrapper">
              <LearningWordsPagination
                wordsCount={learningWords.length}
                currentPage={pageNumber}
                changePage={changePage}
              />
            </div>
          )
      }
    </>
  );
};

LearningWords.propTypes = {
  showTranslation: PropTypes.bool.isRequired,
};

export { LearningWords };
