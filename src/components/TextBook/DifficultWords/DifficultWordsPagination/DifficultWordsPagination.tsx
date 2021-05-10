import React from 'react';
import { Pagination } from '@material-ui/lab';

interface LearningWordsPaginationProps {
  currentPage: number; 
  changePage: any; 
  wordsCount: number;
}

const DifficultWordsPagination: React.FC<LearningWordsPaginationProps> = (
  { currentPage, changePage, wordsCount }
  ) => (
  <Pagination
    shape="rounded"
    page={currentPage + 1}
    count={Math.ceil(wordsCount / 20)}
    onChange={changePage}
  />
);

export default DifficultWordsPagination;
