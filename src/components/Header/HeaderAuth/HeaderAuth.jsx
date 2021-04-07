import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
//
import { Person } from '@material-ui/icons';
//
import HeaderProfile from './HeaderProfile/HeaderProfile';
//
import { useAuth } from '../../../contexts/AuthContext';

const HeaderAuth = () => {
  const { isAuth } = useAuth();

  return isAuth
    ? <HeaderProfile />
    : (
      <>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          component={Link}
          to="/account"
        >
          <Person />
        </IconButton>
      </>
    );
};

export default React.memo(HeaderAuth);
