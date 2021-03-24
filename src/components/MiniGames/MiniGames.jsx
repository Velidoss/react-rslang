import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const MiniGames = () => (
  <Typography>
    <Grid container>
      <NavLink to="/savannah">
        Саванна
      </NavLink>
    </Grid>
  </Typography>
);

export default MiniGames;
