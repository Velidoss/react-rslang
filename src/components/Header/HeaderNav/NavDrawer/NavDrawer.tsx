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
  Modal, Container,
} from '@material-ui/core';
//
import { Menu, MenuOpen } from '@material-ui/icons';
//
import { NavDrawerItem } from './NavDrawerItem';
//
import { navLinks } from '../../../../config/navLinks';
//
import styles from './NavDrawer.style';
import ChooseLevel from '../../../MiniGames/ChooseLevel/ChooseLevel';

const NavDrawer: React.FC = () => {
  const classes = styles();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [gamePathState, setGamePathState] = React.useState<string>('/sprint');
  const [gameName, setGameName] = React.useState<string>('Спринт');

  const toggleDrawer = () => { setIsOpen(!isOpen); };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleGameClick = (path: string, name: string) => {
    setGamePathState(path);
    setGameName(name);
    handleOpenModal();
    toggleDrawer();
  };

  return (
    <>
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
                              path=""
                              label={gameLabel}
                              icon={gameIcon}
                              onClick={() => handleGameClick(gamePath, gameLabel)}
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
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container className={classes.modalContainer}>
          <ChooseLevel
            gamePath={gamePathState}
            handleCloseModal={handleCloseModal}
            gameName={gameName}
          />
        </Container>
      </Modal>
    </>
  );
};

export { NavDrawer };
