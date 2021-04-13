import React from 'react';
import { Box, Typography } from '@material-ui/core';
//
import { DevIcon } from './DevIcon';
//
import { ReactComponent as LogoRssWhite } from '../../assets/logo-rss-white.svg';
//
import styles from './Footer.style';

const developers = ['Velidoss', 'arumirinka', 'va-z', 'reagentjs'];

const Footer = () => {
  const classes = styles();

  return (
    <footer className={classes.root}>
      <Box className={classes.wrapper}>
        <a
          href="https://rs.school/react/"
          rel="noreferrer"
          target="_blank"
          className={classes.rss}
        >
          <LogoRssWhite className={classes.logoRss} />
        </a>
        <Box className={classes.devs}>
          {developers.map((dev) => <DevIcon key={dev} name={dev} />)}
        </Box>
        <Typography variant="subtitle2" className={classes.year}>2021</Typography>
      </Box>
    </footer>
  );
};

export { Footer };
