import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

const NavDrawerItem = ({
  path, label, icon, onClick,
}) => (
  <ListItem
    button
    component={Link}
    to={path}
    key={label}
    onClick={onClick}
  >
    <ListItemIcon>{React.createElement(icon)}</ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
);

NavDrawerItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};

export default React.memo(NavDrawerItem);
