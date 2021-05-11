import * as React from 'react';
import { Grid, Hidden } from '@material-ui/core';
//
import { NavList } from './NavList';
import { NavDrawer } from './NavDrawer';
import { NavLogo } from './NavLogo';

const HeaderNav = () => (
  <Grid container alignItems="center" justify="space-between" spacing={2}>
    <Hidden mdUp>
      <Grid item>
        <NavDrawer />
      </Grid>
    </Hidden>
    <Grid item>
      <NavLogo />
    </Grid>
    <Hidden smDown>
      <Grid item>
        <NavList />
      </Grid>
    </Hidden>
  </Grid>
);

export { HeaderNav };
