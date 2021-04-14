import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';
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
      <div className="list-wrapper">
        <List className="list">
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
        <MiniGameLinks />
      </div>
    </>
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

export { Dictionary };
