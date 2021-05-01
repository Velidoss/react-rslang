import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';
//
import { WordItem, TextBookPagination } from '../../_common';
import { MiniGameLinks } from '../MiniGameLinks';
import { PageStats } from './PageStats';
//
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';

const Dictionary = ({
  words,
  showControls,
  showTranslation,
  pageNumber,
  groupNumber,
  changePage,
}) => {
  const { userWords } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  return (
    <>
      {
        isAuth && (
          <div className="stats-wrapper">
            <PageStats words={words} userWords={userWords} />
          </div>
        )
      }
      <div className="list-wrapper">
        <List className={clsx('list', `list--${groupNumber}`)}>
          {words.map((word) => (
            <WordItem
              key={word._id}
              word={word}
              userWords={userWords}
              showControls={showControls}
              showTranslation={showTranslation}
              userId={userId}
              isAuth={isAuth}
              token={token}
            />
          ))}
        </List>
      </div>
      <div className="pagination-wrapper">
        <TextBookPagination
          currentPage={pageNumber}
          changePage={changePage}
        />
      </div>
      <div className="links-wrapper">
        <MiniGameLinks group={groupNumber} page={pageNumber} linkSrc="dictionary" />
      </div>
    </>
  );
};

Dictionary.propTypes = {
  words: PropTypes.arrayOf({
    _id: PropTypes.number.isRequired,
  }).isRequired,
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
  pageNumber: PropTypes.number.isRequired,
  groupNumber: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export { Dictionary };
