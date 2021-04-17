import { makeStyles } from '@material-ui/core/styles';
import puzzleConstants from '../../../../constants/puzzleConstants';

const { ANIMATION_DURATION } = puzzleConstants;

const useStyles = makeStyles({
  root: {
    paddingTop: '8vh',
    paddingBottom: '8vh',

    '& h5': {
      marginBottom: '2rem',
    },

    '& .button:not(:last-child)': {
      marginRight: '2vw',
    },

    '& .button': {
      marginBottom: '1vh',
    },

    '& .blocks': {
      minHeight: '14vh',
      marginBottom: '2rem',

      '&:first-of-type': {
        borderBottom: '2px solid #2f2f2f',
      },

      '& button': {
        textTransform: 'none',
      },
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
