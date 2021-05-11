import * as React from 'react';
//
import logoRSLang from '../../../../assets/logo-rslang.svg';
//
import styles from './NavLogo.style';

const NavLogo: React.FC = () => {
  const classes = styles();

  return (
    <img
      src={logoRSLang}
      className={classes.root}
      alt="React-RSLang"
    />
  );
};

export { NavLogo };
