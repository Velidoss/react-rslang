import { makeStyles } from '@material-ui/core';

export default makeStyles({
  root: {
    borderBottom: '1px solid black',
    padding: '1rem',

    '&:last-child': {
      borderBottom: 'none',
    },
  },

  wordHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  wordMainWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  wordMain: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  wordName: {
    marginLeft: '0.5rem',
  },

  wordTranscription: {
    marginLeft: '0.5rem',
    fontStyle: 'italic',
  },

  wordTranslation: {
    margin: '0 0 0.5rem',
  },

  wordControls: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
