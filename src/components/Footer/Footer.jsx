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
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  wrapper: {
    width: '100%',
    display: 'grid',
    gridTemplate: 'auto / 25% 1fr 25%',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      gridTemplate: 'auto / 17% 1fr 10%',
    },
  },
  rss: {
    justifySelf: 'left',
    display: 'flex',
    alignItems: 'center',

    '& :hover': {
      opacity: '0.7',
    },
  },
  logoRss: {
    width: 'auto',
    height: theme.mixins.toolbar.minHeight * 0.65,
    [theme.breakpoints.down('md')]: {
      height: theme.mixins.toolbar.minHeight * 0.40,
    },
  },
  devs: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  year: {
    justifySelf: 'right',
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

export default Footer;
