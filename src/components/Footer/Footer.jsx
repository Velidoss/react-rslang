import React from 'react';
import {
  makeStyles, Box, Typography,
} from '@material-ui/core';
//
import DevIcon from './DevIcon/DevIcon';
//
import { ReactComponent as LogoRssWhite } from '../../assets/logo-rss-white.svg';

const developers = ['Velidoss', 'arumirinka', 'va-z', 'reagentjs'];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoRss: {
    width: 'auto',
    height: theme.mixins.toolbar.minHeight * 0.65,
  },
  devs: {
    display: 'flex',
  },
  dev: {
    padding: `0 ${theme.spacing(1)}px`,
  },
}
));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box className={classes.wrapper}>
        <a
          href="https://rs.school/react/"
          rel="noreferrer"
          target="_blank"
        >
          <LogoRssWhite className={classes.logoRss} width="auto" />
        </a>
        <Box
          container
          justify="center"
          alignItems="center"
          className={classes.devs}
        >
          {developers.map((dev) => (
            <div key={dev} className={classes.dev}>
              <DevIcon name={dev} />
            </div>
          ))}
        </Box>
        <Typography variant="subtitle2">2021</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
