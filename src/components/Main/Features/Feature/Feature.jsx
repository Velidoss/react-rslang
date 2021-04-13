import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
//
import styles from './Feature.style';

const Feature = ({
  title,
  text,
  image,
  reverse,
}) => {
  const classes = styles({ image });

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      className={classes.root}
    >
      <Grid item xs={12} className={classes.title}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <Grid
          container
          direction={reverse ? 'row-reverse' : 'row'}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={7} md={5} lg={7}>
            <Typography variant="body2">{text}</Typography>
          </Grid>
          <Grid item xs={4} md={6} lg={4}>
            <Box className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
};

export { Feature };
