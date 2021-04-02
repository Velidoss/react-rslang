import React from 'react';
import {
  Grid, Chip,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import useWordStatsStyles from './WordStatsStyles';

const WordStats = () => {
  const classes = useWordStatsStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Chip
          avatar={<StarIcon />}
          className={classes.chip}
          label="Саванна: 11 | 12 | 14"
          clickable
        />
      </Grid>
      <Grid item>
        <Chip
          avatar={<StarIcon />}
          className={classes.chip}
          label="Спринт: 11 | 12 | 14"
          clickable
        />
      </Grid>
      <Grid item>
        <Chip
          avatar={<StarIcon />}
          className={classes.chip}
          label="Аудиовызов: 11 | 12 | 14"
          clickable
        />
      </Grid>
      <Grid item>
        <Chip
          avatar={<StarIcon />}
          className={classes.chip}
          label="Пазл: 11 | 12 | 14"
          clickable
        />
      </Grid>
    </Grid>
  );
};

export default WordStats;
