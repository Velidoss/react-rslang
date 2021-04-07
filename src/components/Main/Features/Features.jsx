import * as React from 'react';
import { Grid } from '@material-ui/core';
//
import Feature from './Feature/Feature';
//
import { features } from '../../../constants/mainConstants';

const Features = () => (
  <Grid container justify="center" alignItems="center">
    {
      features.map((feature, index) => (
        <Grid
          item
          lg={8}
          xs={10}
          key={feature.title}
        >
          <Feature {...feature} reverse={!(index % 2)} />
        </Grid>
      ))
    }
  </Grid>
);

export default React.memo(Features);
