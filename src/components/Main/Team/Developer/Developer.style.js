import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    padding: '0 2vw',

    [theme.breakpoints.down('xl')]: {
      padding: '0 1vw',
    },

    [theme.breakpoints.down('lg')]: {
      padding: '3vw',
    },
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2vw',
  },

  image: {
    borderRadius: '100%',
    width: '60%',
    height: 'auto',
  },

  textContainer: {
    textAlign: 'center',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },

  name: {
    fontWeight: 'bold',
  },
}));
