import * as React from 'react';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loader = (loaderProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress {...loaderProps} />
    </Box>
  );
};

export default Loader;
