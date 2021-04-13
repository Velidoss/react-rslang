import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
//
import { Bookmark } from '@material-ui/icons';

const GroupsMenu = React.memo(({ className, setGroupNumber }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  return (
    <>
      <IconButton
        disableRipple
        className={className}
        onClick={handleClick}
        aria-controls="textbook-nav-menu"
        aria-haspopup="true"
      >
        <Bookmark />
      </IconButton>
      <Menu
        keepMounted
        id="textbook-nav-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          [0, 1, 2, 3, 4, 5].map((num) => (
            <MenuItem key={num} onClick={() => { setGroupNumber(num); }}>
              {`Раздел ${num + 1}`}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
});

GroupsMenu.defaultProps = {
  className: null,
};

GroupsMenu.propTypes = {
  className: PropTypes.string,
  setGroupNumber: PropTypes.func.isRequired,
};

export { GroupsMenu };
