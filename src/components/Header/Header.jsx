import * as React from 'react';
import { useLocation } from 'react-router-dom';
//
import {
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';
//
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderAuth from './HeaderAuth/HeaderAuth';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={pathname === '/' || 'test'}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <HeaderNav />
            </Grid>
            <Grid item>
              <HeaderAuth />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export { Header };
