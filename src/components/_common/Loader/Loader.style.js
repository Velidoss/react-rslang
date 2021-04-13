// attribution
// https://codepen.io/ryanmclaughlin/pen/XJopVe

import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    backgroundColor: theme.palette.text.secondary,

    '& .book-shelf': {
      width: '15vw',
    },

    '& .book-shelf__book': {
      animation: '$book-bounce 0.9s ease',
      animationIterationCount: 'infinite',
    },

    '& .book-shelf__book--two': {
      animationDelay: '0.2s',
    },

    '& .book-shelf__book--three': {
      animationDelay: '0.4s',
    },
  },

  '@keyframes book-bounce': {
    '0%': {
      transform: 'translateY(0)',
    },
    '30%': {
      transform: 'translateY(-10px)',
    },
    '60%': {
      transform: 'translateY(0)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
}));
