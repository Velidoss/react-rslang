import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { List } from '@material-ui/core';
//
import { MiniGameLinks } from '../MiniGameLinks';
//
import { WordItem, NoAuthPlaceholder } from '../../_common';
//
import {
  fetchUserDeletedWords,
  removeWordFromDeleted,
} from '../../../store/textBookReducer/userWordsActionCreators';
import textBookSelector from '../../../store/selectors/textBookSelector';
//
import { useAuth } from '../../../contexts/AuthContext';
import UserWordsPagination from '../../_common/UserWordsPagination/UserWordsPagination';
import ITextBookWord from '../../../interfaces/ITextBookWord';


interface DeletedWordsProps {
  showControls: boolean; 
  showTranslation: boolean;
}

const DeletedWords: React.FC<DeletedWordsProps> = ({
  showControls, showTranslation,
}) => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = React.useState(0);
  const { deletedWords, deletedWordsQuantity, userWords } = useSelector(textBookSelector);
  const {
    auth: {
      userId,
      token,
    },
    isAuth,
  } = useAuth();

  const changePage = (_: any, number: number) => { setPageNumber(number - 1); };

  React.useEffect(() => {
    dispatch(fetchUserDeletedWords(userId, token, pageNumber));
  }, [userId, token, pageNumber, dispatch]);

  return !isAuth
    ? <NoAuthPlaceholder />
    : (
      <>
        <div className="list-wrapper">
          <List className="list">
            {
              deletedWords.map((word: ITextBookWord) => (
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
          deletedWordsQuantity > 20
            && (
              <div className="pagination-wrapper">
                <UserWordsPagination
                  wordsCount={deletedWordsQuantity}
                  currentPage={pageNumber}
                  changePage={changePage}
                />
              </div>
            )
        }
        <div className="links-wrapper">
          <MiniGameLinks group={0} page={pageNumber} linkSrc="deleted" />
        </div>
      </>
    );
};

export { DeletedWords };
