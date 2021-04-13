import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    padding: '5vw 0 0',
  },

  title: {
    paddingBottom: '5vw',
  },

  img: {
    height: '651px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: ({ image }) => `url(${image})`,

    [theme.breakpoints.down('sm')]: {
      height: '381px',
    },

    [theme.breakpoints.down('xs')]: {
      height: '200px',
    },
  },
}));
