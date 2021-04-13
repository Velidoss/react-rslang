import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';
import { textBookConstants } from '../../../../constants/textBookConstants';

const { TEXTBOOK_PAGES_QUANTITY } = textBookConstants;

const TextBookPagination = ({ currentPage, changePage }) => (
  <Pagination shape="rounded" page={currentPage + 1} count={TEXTBOOK_PAGES_QUANTITY} onChange={changePage} />
);

TextBookPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default TextBookPagination;
