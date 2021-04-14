import React from 'react';
import { Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const SavannahStart = ({ startGame }) => (
  <Button
    onClick={startGame}
    variant="contained"
    color="secondary"
  >
    Начать игру
  </Button>
);

SavannahStart.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default SavannahStart;
