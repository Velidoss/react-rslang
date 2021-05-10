import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Bookmark } from '@material-ui/icons';
import { textBookConstants, linkTypes } from '../../../../constants/textBookConstants';
import { useAuth } from '../../../../contexts/AuthContext';

interface GroupsMenuProps {
  className?: string;
  setGroupNumber: (value: number | ((prevValue: number) => number)) => void;
  setTextBookHeaderTitle: (text: string) => void;
}

const GroupsMenu: React.FC<GroupsMenuProps> = React.memo(({ className, setGroupNumber, setTextBookHeaderTitle }) => {
  const { isAuth } = useAuth();
  const { LINK_PRIVATE } = linkTypes;
  const { getTextBookLinks } = textBookConstants;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget); };
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

export { GroupsMenu };
