import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
//
import * as images from '../../../assets/images/index';

const {
  main: {
    heroBackground,
  },
} = images;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '90vh',
    color: '#fff',
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',

    [theme.breakpoints.down('xs')]: {
      height: '60vh',
    },
  },
  container: {
    maxWidth: '100%',
    height: '100%',
    paddingBottom: theme.spacing(2),
  },
  textContainer: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Grid container className={classes.textContainer}>
          <Grid item xl={4} md={6} sm={10}>
            <Typography variant="h1" gutterBottom className={classes.heading}>React RSLang</Typography>
            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, ubique eirmod scaevola nec ne, no antiopam temporibus neglegentur cum. Pri facete epicurei platonem ea, an alii accusamus est.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
