import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,

    '&:hover': {
      textDecoration: 'none',

      '& $text': {
        display: 'block',
      },

      '& $overlay': {
        display: 'block',
      },

      '& $image': {
        transform: 'scale(1.1)',
      },
    },
  },

  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  image: {
    objectFit: 'cover',
    transition: 'transform 300ms ease',
  },

  text: {
    display: 'none',
    zIndex: 2,
  },

  overlay: {
    backgroundColor: theme.palette.action.selected,
    display: 'none',
    zIndex: 2,
  },
}));
