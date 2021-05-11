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
  modalContainer: {
    width: '380px',
    backgroundColor: theme.palette.type === 'dark' ? '#43373D' : '#F6F4F5',
    padding: '1rem',
    margin: '2rem auto',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },
}));
