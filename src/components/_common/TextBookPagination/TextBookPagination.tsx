import React from 'react';
import { Pagination } from '@material-ui/lab';
//
import { TEXTBOOK_PAGES_QUANTITY } from '../../../constants/textBookConstants';

interface TextBookPaginationProps {
  currentPage: number;
  changePage: any;
}

const TextBookPagination: React.FC<TextBookPaginationProps> = (
    { currentPage, changePage }
  ) => (
  <Pagination
    shape="rounded"
    page={currentPage + 1}
    count={TEXTBOOK_PAGES_QUANTITY}
    onChange={changePage}
  />
);

export { TextBookPagination };
