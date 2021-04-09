import * as React from 'react';
import { useLocation } from 'react-router-dom';
//
import {
  AppBar,
  Toolbar,
  Grid,
  makeStyles,
} from '@material-ui/core';
//
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderAuth from './HeaderAuth/HeaderAuth';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid #fff',

    '& .MuiButton-root': {
      backgroundColor: 'transparent',

      '& :hover': {
        textShadow: '0 0 10px #fff',
      },
    },
  },
});

const Header = () => {
  const { pathname } = useLocation();
  const classes = useStyles();

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
