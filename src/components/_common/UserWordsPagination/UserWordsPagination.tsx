import React from 'react';
import { Pagination } from '@material-ui/lab';

interface UserWordsPaginationProps {
  currentPage: number;
  changePage: any;
  wordsCount: number;
}

const UserWordsPagination: React.FC<UserWordsPaginationProps> = (
    { currentPage, changePage, wordsCount }
  ) => (
  <Pagination
    shape="rounded"
    page={currentPage + 1}
    count={Math.ceil(wordsCount / 20)}
    onChange={changePage}
  />
);

export default UserWordsPagination;
