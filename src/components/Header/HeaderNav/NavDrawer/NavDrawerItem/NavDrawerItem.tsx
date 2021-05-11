import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

interface NavDrawerItemProps {
  path: string;
  label: string;
  onClick: () => void;
  icon: any;
}

const NavDrawerItem: React.FC<NavDrawerItemProps> = ({
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

export { NavDrawerItem };
