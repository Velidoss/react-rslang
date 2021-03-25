import React from 'react';
import PropTypes from 'prop-types';

const SavannahResult = ({ right, wrong }) => {
  const calculatePercentage = (x, y) => (x / (x + y)) * 100;

  return (
    <div>
      <div>{`${calculatePercentage(right, wrong)}%`}</div>
      <div>{`Right: ${right}`}</div>
      <div>{`Wrong: ${wrong}`}</div>
    </div>
  );
};

SavannahResult.propTypes = {
  right: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
};

export default SavannahResult;
