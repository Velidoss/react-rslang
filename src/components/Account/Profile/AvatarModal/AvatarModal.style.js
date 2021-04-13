import { makeStyles } from '@material-ui/core';

export default makeStyles({
  buttons: {
    display: 'flex',
    margin: '1rem 0 0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginRight: '0.5rem',
  },

  input: {
    display: 'none',
  },

  image: {
    height: '5rem',
    width: '5rem',
    objectFit: 'cover',
  },

  imageName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '5rem',
  },
});
