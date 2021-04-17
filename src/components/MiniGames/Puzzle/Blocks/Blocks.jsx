import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Blocks = ({ blocks, action }) => {
  let id = 0;

  return (
    <div className="blocks">
      {blocks.map((word) => {
        id += 1;

        return (
          <Button
            variant="outlined"
            color="inherit"
            key={id}
            onClick={action}
            className="button"
          >
            {word}
          </Button>
        );
      })}
    </div>
  );
};

Blocks.propTypes = {
  blocks: PropTypes.instanceOf(Object).isRequired,
  action: PropTypes.func.isRequired,
};

export default Blocks;
