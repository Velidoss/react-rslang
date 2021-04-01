import * as React from 'react';
//
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
//
import { useAuth } from '../../../contexts/AuthContext';

const HeaderAuth = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  ) : null;
};

export default React.memo(HeaderAuth);
