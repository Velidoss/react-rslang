import React from 'react';
import {
  Grid, Chip,
} from '@material-ui/core';
//
import useWordStatsStyles from './WordStatsStyles';
import { statChipConfig } from '../../../../../constants/textBookConstants';
//

const WordStats = () => {
  const classes = useWordStatsStyles();

  return (
    <Grid container spacing={1} className={classes.container}>
      {
        statChipConfig.map(({ title, icon }) => (
          <Grid item key={title}>
            <Chip
              avatar={React.createElement(icon)}
              label={`${title}: сыграно 11 | верно 12 | неверно 14`}
              clickable
            />
          </Grid>
        ))
      }
    </Grid>
  );
};

export { WordStats };
