import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';

const LearningWordsPagination = ({ currentPage, changePage, wordsCount }) => (
  <Pagination
    shape="rounded"
    page={currentPage + 1}
    count={Math.ceil(wordsCount / 20)}
    onChange={changePage}
  />
);

LearningWordsPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  wordsCount: PropTypes.number.isRequired,
};

export default LearningWordsPagination;
