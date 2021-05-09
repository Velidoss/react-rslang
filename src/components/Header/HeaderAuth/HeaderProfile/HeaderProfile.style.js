import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: theme.palette.primary.contrastText,
    paddingRight: '1rem',
    width: '7rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
