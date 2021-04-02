import React from 'react';
import PropTypes from 'prop-types';

const Answers = ({ right, wrong }) => (
  <>
    <p>
      <span>Верных ответов: </span>
      <span>{right}</span>
    </p>
    <p>
      <span>Неверных ответов: </span>
      <span>{wrong}</span>
    </p>
  </>
);

Answers.propTypes = {
  right: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
};

export default Answers;
