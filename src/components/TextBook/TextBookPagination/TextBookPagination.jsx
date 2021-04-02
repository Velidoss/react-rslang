import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';
import textBookContants from '../../../constants/textBookContants';

const { TEXTBOOK_PAGES_QUANTITY } = textBookContants;

const TextBookPagination = ({ currentPage, changePage }) => (
  <Pagination shape="rounded" page={currentPage + 1} count={TEXTBOOK_PAGES_QUANTITY} onChange={changePage} />
);

TextBookPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default TextBookPagination;
