import React, { useState } from 'react';
import {
  Grid, IconButton, Menu, MenuItem,
} from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import useTextBookHeaderStyles from '../useTextBookHeaderStyles';

const GroupsMenu = ({ setGroupNumber }) => {
  const classes = useTextBookHeaderStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container item xs={1}>
      <IconButton onClick={handleClick} disableRipple className={classes.button}>
        <Bookmark className={classes.buttonIcon} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setGroupNumber(0)}>
          <NavLink to="/textbook">
            Раздел 1
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(1)}>
          <NavLink to="/textbook">
            Раздел 2
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(2)}>
          <NavLink to="/textbook">
            Раздел 3
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(3)}>
          <NavLink to="/textbook">
            Раздел 4
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(4)}>
          <NavLink to="/textbook">
            Раздел 5
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(5)}>
          <NavLink to="/textbook">
            Раздел 6
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/textbook/learning">
            Изучаемые слова
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/textbook/difficult">
            Сложные слова
          </NavLink>
        </MenuItem>
        <MenuItem>
          Удаленные слова
        </MenuItem>
      </Menu>
    </Grid>
  );
};

GroupsMenu.propTypes = {
  setGroupNumber: PropTypes.func.isRequired,
};

export default GroupsMenu;
