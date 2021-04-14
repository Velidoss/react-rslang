import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    borderBottom: '1px solid black',
    padding: '1rem',

    '&:last-child': {
      borderBottom: 'none',
    },
  },

  wordControls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  wordControlsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  wordName: {
    marginLeft: '0.5rem',
  },

  wordTranscription: {
    marginLeft: '0.5rem',
    fontStyle: 'italic',
  },
});
