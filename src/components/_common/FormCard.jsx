import * as React from 'react';
import PropTypes from 'prop-types';
//
import { Box, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: '500px',
    minWidth: '250px',
  },
}));

const FormCard = ({ children }) => {
  const classes = useStyles();

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

export default FormCard;
