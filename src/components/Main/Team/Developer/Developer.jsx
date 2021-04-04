import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 2vw',

    [theme.breakpoints.down('xl')]: {
      padding: '0 1vw',
    },

    [theme.breakpoints.down('lg')]: {
      padding: '3vw',
    },
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2vw',
  },

  image: {
    borderRadius: '100%',
    width: '60%',
    height: 'auto',
  },

  textContainer: {
    textAlign: 'center',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
}));

const Developer = ({ name, text, image }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} sm={12} className={classes.imageContainer}>
        <img src={image} alt="developer" className={classes.image} />
      </Grid>
      <Grid item xs={7} sm={12} className={classes.textContainer}>
        <Typography variant="h6" gutterBottom>{name}</Typography>
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

export default React.memo(Developer);
