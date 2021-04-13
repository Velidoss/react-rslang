import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '8vh',
    // backgroundColor: 'red',

    '& h4': {
      marginBottom: '2rem',
    },

    '& .container': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .button': {
      textTransform: 'none',

      '&:not(:last-child)': {
        marginRight: '2vw',
      },
    },
  },
});

export default useStyles;
