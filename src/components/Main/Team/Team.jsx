import * as React from 'react';
import {
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
//
import { Developer } from './Developer/Developer';
//
import { team } from '../../../constants/mainConstants';
//
import styles from './Team.style';

const Team = () => {
  const classes = styles();

  return (
    <Box className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography
            variant="h2"
            align="center"
            className={classes.title}
          >
            О нас
          </Typography>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {
              team.map((member) => (
                <Grid
                  item
                  key={member.name}
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <Developer {...member} />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Team };
