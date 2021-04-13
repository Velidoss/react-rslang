import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const SavannahStart = ({ startGame }) => (
  <Container>
    <Typography variant="h4">
      Саванна
    </Typography>
    <Button
      onClick={startGame}
      variant="contained"
      color="secondary"
    >
      Start
    </Button>
  </Container>
);

SavannahStart.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default SavannahStart;
