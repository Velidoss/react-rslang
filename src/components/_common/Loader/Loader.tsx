import * as React from 'react';
import { Box } from '@material-ui/core';
//
import { ReactComponent as IconLoader } from '../../../assets/icon-loader.svg';
//
import styles from './Loader.style';

const Loader: React.FC = () => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      <IconLoader />
    </Box>
  );
};

export { Loader };
