import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '1px solid #fff',

    '& .MuiButton-root': {
      backgroundColor: 'transparent',

      '& :hover': {
        textShadow: '0 0 10px #fff',
      },
    },
  },
});
