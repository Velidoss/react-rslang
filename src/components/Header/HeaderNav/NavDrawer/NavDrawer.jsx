import * as React from 'react';
import {
  IconButton,
  Drawer,
  List,
  ListSubheader,
  ListItemText,
  ListItemIcon,
  ListItem,
  Divider,
} from '@material-ui/core';
//
import { Menu, MenuOpen } from '@material-ui/icons';
//
import { NavDrawerItem } from './NavDrawerItem';
//
import { navLinks } from '../../../../config/navLinks';
//
import styles from './NavDrawer.style';

const NavDrawer = () => {
  const classes = styles();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => { setIsOpen(!isOpen); };

  return (
    <List>
      <IconButton
        aria-label="navigation"
        className={classes.button}
        onClick={toggleDrawer}
      >
        <Menu />
      </IconButton>
      <Drawer open={isOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon><MenuOpen /></ListItemIcon>
            <ListItemText>Закрыть</ListItemText>
          </ListItem>
        </List>
        <List
          className={classes.list}
          subheader={<ListSubheader>Навигация</ListSubheader>}
        >
          {
            navLinks.map(({ label, path, icon }) => (
              typeof path === 'string'
                ? (
                  <NavDrawerItem
                    key={label}
                    path={path}
                    label={label}
                    icon={icon}
                    onClick={toggleDrawer}
                  />
                ) : (
                  <React.Fragment key={label}>
                    <Divider />
                    <List
                      className={classes.nested}
                      subheader={<ListSubheader>{label}</ListSubheader>}
                    >
                      {
                        path.map(({
                          label: gameLabel,
                          path: gamePath,
                          icon: gameIcon,
                        }) => (
                          <NavDrawerItem
                            key={gameLabel}
                            path={gamePath}
                            label={gameLabel}
                            icon={gameIcon}
                            onClick={toggleDrawer}
                          />
                        ))
                      }
                    </List>
                    <Divider />
                  </React.Fragment>
                )))
            }
        </List>
      </Drawer>
    </List>
  );
};

export { NavDrawer };
