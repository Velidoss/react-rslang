import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '600px',
    display: 'grid',
    gridTemplate: 'repeat(2, 1fr) / repeat(4, 1fr)',
    gap: theme.spacing(1),

    '& .mini-game-link__sprint': {
      gridRow: '1 / 3',
      gridColumn: '1 / 3',
    },

    '& .mini-game-link__savanna': {
      gridColumn: '3 / 4',
    },

    '& .mini-game-link__puzzle': {
      gridColumn: '3 / 5',
    },

    [theme.breakpoints.down('md')]: {
      gridTemplate: 'repeat(3, 1fr) / repeat(2, 1fr)',
      height: '400px',

      '& .mini-game-link__sprint': {
        gridRow: '1 / 4',
        gridColumn: '1 / 2',
      },

      '& .mini-game-link__savanna': {
        gridColumn: '2 / 3',
      },

      '& .mini-game-link__puzzle': {
        gridColumn: '2 / 3',
      },
    },

    [theme.breakpoints.down('sm')]: {
      gridTemplate: 'repeat(4, 1fr) / auto',

      '& .mini-game-link__sprint': {
        gridRow: 'auto',
        gridColumn: 'auto',
      },

      '& .mini-game-link__savanna': {
        gridColumn: 'auto',
      },

      '& .mini-game-link__puzzle': {
        gridColumn: 'auto',
      },
    },
  },
}));
