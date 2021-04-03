import { makeStyles } from '@material-ui/core/styles';
import puzzleConstants from '../../../../constants/puzzleConstants';

const { ANIMATION_DURATION } = puzzleConstants;

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

    '& .check__button': {
      marginBottom: '2rem',
    },

    '& .check__button-wrong': {
      animation: `$strafe ${ANIMATION_DURATION}ms linear`,
    },
  },

  '@keyframes strafe': {
    '0%': {
      transform: 'translateX(0%)',
    },

    '25%': {
      transform: 'translateX(-15%)',
    },

    '75%': {
      transform: 'translateX(15%)',
    },

    '100%': {
      transform: 'translateX(0%)',
    },
  },
});

export default useStyles;
