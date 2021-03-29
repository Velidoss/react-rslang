import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';

const TextBookPagination = ({ currentPage, changePage }) => (
  <Pagination shape="rounded" page={currentPage} count={10} onChange={changePage} />
);

TextBookPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default TextBookPagination;
