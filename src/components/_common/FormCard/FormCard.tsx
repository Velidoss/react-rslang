import * as React from 'react';
//
import { Box, Paper } from '@material-ui/core';
//
import styles from './FormCard.style';

interface FormCardProps {
  children: React.ReactNode[];
}

const FormCard: React.FC<FormCardProps> = ({ children }) => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        {children}
      </Paper>
    </Box>
  );
};

export { FormCard };
