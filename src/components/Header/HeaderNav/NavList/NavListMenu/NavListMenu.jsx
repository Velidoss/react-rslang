import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuItem,
} from '@material-ui/core';
//
import { HeaderButton } from '../../../../_common/HeaderButton';

const NavListMenu = ({ label, links }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
  const handleScroll = () => {
    if (anchorEl) {
      handleClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <HeaderButton
        label={label}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        keepMounted
        disableScrollLock
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        {
          links.map(({ label: itemLabel, path }) => (
            <MenuItem
              key={itemLabel}
              component={Link}
              to={path}
              onClick={handleClose}
            >
              {itemLabel}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
};

NavListMenu.propTypes = {
  label: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    path: PropTypes.string,
  })).isRequired,
};

export default React.memo(NavListMenu);
