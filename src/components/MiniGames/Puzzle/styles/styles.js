import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '10vh',

    '& .task': {
      marginBottom: '5vh',
    },

    '& .blocks': {
      minHeight: '14vh',

      '& button': {
        marginBottom: '2vh',
        textTransform: 'none',

        '&:not(:last-child)': {
          marginRight: '2vw',
        },
      },
    },
  },
});

export default useStyles;
