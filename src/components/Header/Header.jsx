import React from 'react';
import {
  AppBar, Toolbar, Button, IconButton, Grid,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="relative" style={{ backgroundColor: '#0388fc' }}>
    <Toolbar>
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Grid md={6} item spacing={2} container justify="center">
          <NavLink activeStyle={{ textDecoration: 'none' }} to="/">
            <Button variant="contained" color="primary" size="small">
              RS-LANG
            </Button>
          </NavLink>
          <NavLink activeStyle={{ textDecoration: 'none' }} to="/textbook">
            <Button variant="contained" color="primary" size="small">
              Учебник
            </Button>
          </NavLink>
          <NavLink activeStyle={{ textDecoration: 'none' }} to="/minigames">
            <Button variant="contained" color="primary" size="small">
              Мини-игры
            </Button>
          </NavLink>
          <NavLink activeStyle={{ textDecoration: 'none' }} to="/statistics">
            <Button variant="contained" color="primary" size="small">
              Статистика
            </Button>
          </NavLink>
        </Grid>
        <Grid item md={1}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Grid>

      </Grid>

    </Toolbar>
  </AppBar>
);

export default Header;
