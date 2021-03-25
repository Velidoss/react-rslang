import React from 'react';
import PropTypes from 'prop-types';

const GameCounter = ({ timeLeft }) => (
  <div>{timeLeft}</div>
);

GameCounter.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default GameCounter;
