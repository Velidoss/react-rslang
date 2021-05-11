import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
//
import { DevIcon } from './DevIcon';
//
import { ReactComponent as LogoRssWhite } from '../../assets/logo-rss-white.svg';
//
import { team, miniGameLocations } from '../../constants/mainConstants';
//
import styles from './Footer.style';

const Footer: React.FC = () => {
  const classes = styles();
  const { pathname } = useLocation();

  return !(miniGameLocations.includes(pathname)) ? (
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
          {team.map(({ github }) => <DevIcon key={github} name={github} />)}
        </Box>
        <Typography variant="subtitle2" className={classes.year}>2021</Typography>
      </Box>
    </footer>
  ) : null;
};

export { Footer };
