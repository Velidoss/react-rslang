import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',

    '& :hover': {
      opacity: '0.7',
      textDecoration: 'none !important',
    },
  },
  icon: {
    [theme.breakpoints.down('md')]: {
      width: '16px',
      height: '16px',
    },
  },
}));
