import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Answers = ({ right, wrong }) => (
  <>
    <Typography>
      <span>Верных ответов: </span>
      <span>{right}</span>
    </Typography>
    <Typography>
      <span>Неверных ответов: </span>
      <span>{wrong}</span>
    </Typography>
  </>
);

Answers.propTypes = {
  right: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
};

export default Answers;
