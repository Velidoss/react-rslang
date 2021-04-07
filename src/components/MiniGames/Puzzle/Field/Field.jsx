import React from 'react';
import PropTypes from 'prop-types';
import Blocks from '../Blocks/Blocks';

const Field = ({ chosen, choice, moveTo }) => (
  <>
    <Blocks
      blocks={chosen}
      action={(event) => moveTo(event, 'down')}
    />
    <Blocks
      blocks={choice}
      action={(event) => moveTo(event, 'up')}
    />
  </>
);

Field.propTypes = {
  chosen: PropTypes.instanceOf(Object).isRequired,
  choice: PropTypes.instanceOf(Object).isRequired,
  moveTo: PropTypes.func.isRequired,
};

export default Field;
