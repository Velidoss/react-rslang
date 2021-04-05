import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const MiniGames = () => (
  <Typography>
    <Grid container>
      <NavLink to="/savannah">
        Саванна
      </NavLink>
      <NavLink to="/sprint">
        Спринт
      </NavLink>
      <NavLink to="/puzzle">
        Пазл
      </NavLink>
    </Grid>
  </Typography>
);

export default MiniGames;
