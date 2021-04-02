import React from 'react';
import { Container, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const PuzzleStart = ({ startGame }) => (
  <Container>
    <Button onClick={startGame}>
      Start
    </Button>
  </Container>
);

PuzzleStart.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default PuzzleStart;
