import * as React from 'react';
import {
  Grid,
  Box,
  Typography,
  Hidden,
  makeStyles,
} from '@material-ui/core';
//
import { youTubeVideoId } from '../../../constants/mainConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5vw 0',

    [theme.breakpoints.down('sm')]: {
      padding: '5vw 0 0',
    },
  },

  heading: {
    paddingBottom: '3vw',
  },

  iframeContainer: {
    margin: 'auto',
    paddingBottom: '56.25%', // resolution 16:9
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '0',
  },

  iframe: {
    position: 'absolute',
    left: '0',
    top: '0',

    width: '100%',
    height: '100%',
  },
}));

const Video = () => {
  const classes = useStyles();

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

export default React.memo(Video);
