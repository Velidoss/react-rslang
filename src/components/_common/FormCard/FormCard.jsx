import * as React from 'react';
import PropTypes from 'prop-types';
//
import { Box, Paper } from '@material-ui/core';
//
import styles from './FormCard.style';

const FormCard = ({ children }) => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        {children}
      </Paper>
    </Box>
  );
};

FormCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FormCard };
