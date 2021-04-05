import React, { useState } from 'react';
import {
  Grid, IconButton, Menu, MenuItem,
} from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
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
          Раздел 1
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(1)}>
          Раздел 2
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(2)}>
          Раздел 3
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(3)}>
          Раздел 4
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(4)}>
          Раздел 5
        </MenuItem>
        <MenuItem onClick={() => setGroupNumber(5)}>
          Раздел 6
        </MenuItem>
      </Menu>
    </Grid>
  );
};

GroupsMenu.propTypes = {
  setGroupNumber: PropTypes.func.isRequired,
};

export default GroupsMenu;
