import * as React from 'react';
import { Box, Typography } from '@material-ui/core';
//
import WarningIcon from '@material-ui/icons/Warning';
//
import styles from './NoAuthPlaceholder.style';

const NoAuthPlaceholder: React.FC = () => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      <div className={classes.heading}>
        <WarningIcon className={classes.icon} color="error" />
        <Typography variant="h3">Контент недоступен!</Typography>
      </div>
      <Typography variant="subtitle1">Войдите в аккаунт или зарегистрируйтесь</Typography>
    </Box>
  );
};

export { NoAuthPlaceholder };
