import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
//
import { MiniGameLinks } from '../MiniGameLinks';
import DeletedWordsPagination from './DeletedWordsPagination/DeletedWordsPagination';
//
import { WordItem } from '../../_common';
//
import {
  fetchUserDeletedWords,
  removeWordFromDeleted,
} from '../../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';

const DeletedWords = ({
  showControls, showTranslation,
}) => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = React.useState(0);
  const { deletedWords, userWords } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  const changePage = (_, number) => { setPageNumber(number - 1); };

  React.useEffect(() => {
    dispatch(fetchUserDeletedWords(userId, token, pageNumber));
  }, [userId, token]);

  return (
    <>
      <div className="list-wrapper">
        <List className="list">
          {
            deletedWords.map((word) => (
              <WordItem
                key={word._id}
                word={word}
                userWords={userWords}
                showControls={showControls}
                showTranslation={showTranslation}
                userId={userId}
                isAuth={isAuth}
                token={token}
                restoreCallback={removeWordFromDeleted}
              />
            ))
          }
        </List>
      </div>
      {
        deletedWords.length > 20
          && (
            <div className="pagination-wrapper">
              <DeletedWordsPagination
                wordsCount={deletedWords.length}
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

DeletedWords.propTypes = {
  showControls: PropTypes.bool.isRequired,
  showTranslation: PropTypes.bool.isRequired,
};

export { DeletedWords };
