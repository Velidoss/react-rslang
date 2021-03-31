import * as React from 'react';
//
import { Grid } from '@material-ui/core';
//
import NavListLink from './NavListLink/NavListLink';
import NavListMenu from './NavListMenu/NavListMenu';
//
import { navLinks } from '../../../../config/navLinks';

const NavList = () => (
  <Grid container alignItems="center" spacing={1}>
    {navLinks.map(({ label, path }) => (
      <Grid item key={label}>
        {
          typeof path === 'string'
            ? <NavListLink label={label} path={path} />
            : <NavListMenu label={label} links={path} />
        }
      </Grid>
    ))}
  </Grid>
);

export default React.memo(NavList);
