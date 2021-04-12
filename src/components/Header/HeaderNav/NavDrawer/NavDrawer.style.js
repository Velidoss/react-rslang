import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.contrastText,
  },
  list: {
    width: 360,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
}));
