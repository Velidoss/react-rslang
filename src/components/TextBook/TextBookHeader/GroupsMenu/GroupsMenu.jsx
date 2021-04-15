import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { textBookConstants, linkTypes } from '../../../../constants/textBookConstants';
import { useAuth } from '../../../../contexts/AuthContext';

const GroupsMenu = React.memo(({ className, setGroupNumber, setTextBookHeaderTitle }) => {
  const { isAuth } = useAuth();
  const { LINK_PRIVATE } = linkTypes;
  const { getTextBookLinks } = textBookConstants;
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
  const menuItems = getTextBookLinks(setGroupNumber);

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
          menuItems.map((item) => {
            if (item.type === LINK_PRIVATE) {
              return isAuth && (
                <MenuItem
                  key={item.id}
                  onClick={() => {
                    item.onClickAction();
                    setTextBookHeaderTitle(item.text);
                    setAnchorEl(null);
                    history.push(item.link);
                  }}
                >
                  {item.text}
                </MenuItem>
              );
            }
            return (
              <MenuItem
                key={item.id}
                onClick={() => {
                  item.onClickAction();
                  setTextBookHeaderTitle(item.text);
                  setAnchorEl(null);
                  history.push(item.link);
                }}
              >
                {item.text}
              </MenuItem>
            );
          })
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
  setTextBookHeaderTitle: PropTypes.func.isRequired,
};

export { GroupsMenu };
