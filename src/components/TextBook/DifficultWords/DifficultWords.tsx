import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  List,
} from '@material-ui/core';
//
import { MiniGameLinks } from '../MiniGameLinks';
//
import { WordItem, NoAuthPlaceholder } from '../../_common';
//
import {
  deleteWordFromDifficult,
  fetchUserDifficultWords,
} from '../../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';
import UserWordsPagination from '../../_common/UserWordsPagination/UserWordsPagination';
import ITextBookWord from './../../../interfaces/ITextBookWord';

interface DifficultWordsProps {
  showControls: boolean; 
  showTranslation: boolean;
}

const DifficultWords: React.FC<DifficultWordsProps> = ({
  showControls, showTranslation,
}) => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const { difficultWords, difficultWordsQuantity, userWords } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  const changePage = (_: any, number: number) => setPageNumber(number - 1);

  useEffect(() => userId && token && dispatch(
    fetchUserDifficultWords(userId, token, pageNumber),
  ), [userId, token, pageNumber, dispatch]);

  return !isAuth
    ? <NoAuthPlaceholder />
    : (
      <>
        <div className="list-wrapper">
          <List className="list">
            {
            difficultWords.map((word: ITextBookWord) => (
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
        difficultWordsQuantity > 20
          && (
            <div className="pagination-wrapper">
              <UserWordsPagination
                wordsCount={difficultWordsQuantity}
                currentPage={pageNumber}
                changePage={changePage}
              />
            </div>
          )
      }
        <div className="links-wrapper">
          <MiniGameLinks group={0} page={pageNumber} linkSrc="difficult" />
        </div>
      </>
    );
};

export { DifficultWords };