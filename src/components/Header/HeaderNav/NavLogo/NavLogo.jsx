import * as React from 'react';
import { makeStyles } from '@material-ui/core';
//
import logoRSLang from '../../../../assets/logo-rslang.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.mixins.toolbar.minHeight * 0.7,
  },
}));

const NavLogo = () => {
  const classes = useStyles();

  return (
    <img
      src={logoRSLang}
      className={classes.root}
      alt="React-RSLang"
    />
  );
};

export default NavLogo;
