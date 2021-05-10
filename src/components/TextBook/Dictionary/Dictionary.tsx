import React from 'react';
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
import ITextBookWord from './../../../interfaces/ITextBookWord';

interface DictionaryProps {
  words: ITextBookWord[];
  showControls: boolean;
  showTranslation: boolean;
  pageNumber: number;
  groupNumber: number;
  changePage: (_: any, number: number) => void;
}

const Dictionary: React.FC<DictionaryProps> = ({
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

export { Dictionary };
