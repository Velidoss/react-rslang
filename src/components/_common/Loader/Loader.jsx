import * as React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
//
import styles from './Loader.style';

const Loader = (loaderProps) => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      <CircularProgress {...loaderProps} />
    </Box>
  );
};

export { Loader };
