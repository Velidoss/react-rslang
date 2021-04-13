import { makeStyles } from '@material-ui/core';
//
import * as images from '../../../assets/images/index';

const {
  main: {
    heroBackground,
  },
} = images;

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80vh',
    minHeight: '80vh',
    color: '#fff',
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',

    [theme.breakpoints.down('xs')]: {
      height: '60vh',
      minHeight: '60vh',
    },
  },
  container: {
    maxWidth: '100%',
    height: '100%',
    paddingBottom: '3vw',

    [theme.breakpoints.down('xs')]: {
      paddingBottom: '0',
    },
  },
  textContainer: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
}));
