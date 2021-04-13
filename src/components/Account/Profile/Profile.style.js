import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    padding: '2rem',
  },

  imageOuterWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2rem',
  },

  imageInnerWrapper: {
    width: '80%',
    borderRadius: '50%',
    overflow: 'hidden',
  },
});
