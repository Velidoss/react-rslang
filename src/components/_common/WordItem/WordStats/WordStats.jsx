import React from 'react';
import {
  Grid, Chip,
} from '@material-ui/core';
//
import { useSelector } from 'react-redux';
import useWordStatsStyles from './WordStatsStyles';
import { statChipConfig } from '../../../../constants/textBookConstants';
import textBookSelector from '../../../../store/selectors/textBookSelector';
//

const WordStats = () => {
  const { userWords } = useSelector(textBookSelector);
  const classes = useWordStatsStyles();
  console.log(userWords);
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
