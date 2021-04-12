import React, { useState } from 'react';
import {
  Grid, IconButton, Menu, MenuItem,
} from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import useTextBookHeaderStyles from '../useTextBookHeaderStyles';
import textBookContants from '../../../../constants/textBookContants';

const GroupsMenu = ({ setGroupNumber, setTextBookHeaderTitle }) => {
  const { getTextBookLinks } = textBookContants;

  const classes = useTextBookHeaderStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = getTextBookLinks(setGroupNumber);

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
        {
          menuItems.map((item) => (
            <MenuItem onClick={() => {
              item.onClickAction();
              setTextBookHeaderTitle(item.text);
            }}
            >
              <NavLink to={item.link}>
                {item.text}
              </NavLink>
            </MenuItem>
          ))
        }
      </Menu>
    </Grid>
  );
};

GroupsMenu.propTypes = {
  setGroupNumber: PropTypes.func.isRequired,
  setTextBookHeaderTitle: PropTypes.func.isRequired,
};

export default GroupsMenu;
