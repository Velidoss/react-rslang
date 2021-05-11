import { makeStyles } from '@material-ui/core';

export default makeStyles((theme: any) => ({
  root: {
    marginTop: 'auto',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    backgroundColor: theme.palette.primary.dark,
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
      height: theme.mixins.toolbar.minHeight * 0.4,
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
}));
