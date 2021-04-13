import * as React from 'react';
import { useLocation } from 'react-router-dom';
//
import {
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';
//
import { HeaderNav } from './HeaderNav';
import { HeaderAuth } from './HeaderAuth';
//
import styles from './Header.style';

const Header = () => {
  const { pathname } = useLocation();
  const classes = styles();

  return (
    <AppBar
      position={pathname === '/' ? 'absolute' : 'static'}
      className={pathname === '/' ? classes.root : null}
    >
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <HeaderNav />
          </Grid>
          <Grid item>
            <HeaderAuth />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
