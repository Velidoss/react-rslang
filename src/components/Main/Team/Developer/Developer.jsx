import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
} from '@material-ui/core';
//
import styles from './Developer.style';

const Developer = ({ name, text, image }) => {
  const classes = styles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} sm={12} className={classes.imageContainer}>
        <img src={image} alt="developer" className={classes.image} />
      </Grid>
      <Grid item xs={7} sm={12} className={classes.textContainer}>
        <Typography variant="subtitle1" className={classes.name} gutterBottom>{name}</Typography>
        <Typography variant="body2">{text}</Typography>
      </Grid>
    </Grid>
  );
};

Developer.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export { Developer };
