import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    padding: '5vw 0',

    [theme.breakpoints.down('sm')]: {
      padding: '5vw 0 0',
    },
  },

  heading: {
    paddingBottom: '3vw',
  },

  iframeContainer: {
    margin: 'auto',
    paddingBottom: '56.25%', // resolution 16:9
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '0',
  },

  iframe: {
    position: 'absolute',
    left: '0',
    top: '0',

    width: '100%',
    height: '100%',
  },
}));
