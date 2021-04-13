import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
//
import styles from './Hero.style';

const Hero = () => {
  const classes = styles();

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

export { Hero };
