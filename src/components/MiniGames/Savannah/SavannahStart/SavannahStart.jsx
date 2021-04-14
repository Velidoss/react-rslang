import React from 'react';
import { Container, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const SavannahStart = ({ startGame }) => (
  <Container>
    <Button onClick={startGame}>
      Начать игру
    </Button>
  </Container>
);

SavannahStart.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default SavannahStart;
