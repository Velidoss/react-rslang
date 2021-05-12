import React from 'react';
import { Pagination } from '@material-ui/lab';

interface DeletedWordsPaginationProps {
  currentPage: number; 
  changePage: any; 
  wordsCount: number;
}

const DeletedWordsPagination: React.FC<DeletedWordsPaginationProps> = (
    { currentPage, changePage, wordsCount }
  ) => (
  <Pagination shape="rounded" page={currentPage + 1} count={Math.ceil(wordsCount / 20)} onChange={changePage} />
);

export default DeletedWordsPagination;
