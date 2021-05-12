import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: '500px',
    minWidth: '250px',
  },
}));
