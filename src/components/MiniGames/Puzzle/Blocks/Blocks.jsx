import React from 'react';
import { Button } from '@material-ui/core';

const Blocks = ({ blocks, action }) => {
  let id = 0;

  return (
    blocks.map((word) => {
      id += 1;

      return (
        <Button
          style={{ textTransform: 'none' }}
          key={id}
          onClick={action}
        >
          {word}
        </Button>
      );
    })
  );
};

export default Blocks;
