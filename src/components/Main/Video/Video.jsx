import * as React from 'react';
import {
  Grid,
  Box,
  Typography,
  Hidden,
} from '@material-ui/core';
//
import { youTubeVideoId } from '../../../constants/mainConstants';
//
import styles from './Video.style';

const Video = () => {
  const classes = styles();

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={10} className={classes.root}>
        <Hidden smDown>
          <Typography variant="h2" align="center" className={classes.heading}>Узнать больше</Typography>
        </Hidden>
        <Box className={`${classes.iframeContainer}`}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youTubeVideoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className={classes.iframe}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export { Video };
