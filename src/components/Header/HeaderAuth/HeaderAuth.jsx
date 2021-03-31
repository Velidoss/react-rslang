import * as React from 'react';
//
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const HeaderAuth = () => (
  <IconButton
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    color="inherit"
  >
    <AccountCircle />
  </IconButton>
);

export default React.memo(HeaderAuth);
