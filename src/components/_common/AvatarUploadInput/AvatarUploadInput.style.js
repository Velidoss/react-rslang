import { makeStyles } from '@material-ui/core';

export default makeStyles({
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
