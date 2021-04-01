import * as React from 'react';
import { Grid, Hidden } from '@material-ui/core';
//
import NavList from './NavList/NavList';
import NavDrawer from './NavDrawer/NavDrawer';
import NavLogo from './NavLogo/NavLogo';

const HeaderNav = () => (
  <Grid container alignItems="center" justify="space-between" spacing={2}>
    <Hidden lgUp>
      <Grid item>
        <NavDrawer />
      </Grid>
    </Hidden>
    <Grid item className="test">
      <NavLogo />
    </Grid>
    <Hidden mdDown>
      <Grid item>
        <NavList />
      </Grid>
    </Hidden>
  </Grid>
);

export default React.memo(HeaderNav);
