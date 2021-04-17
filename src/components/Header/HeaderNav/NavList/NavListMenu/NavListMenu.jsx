import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Menu, MenuItem, Modal, Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//
import { HeaderButton } from '../../../../_common';
import ChooseLevel from '../../../../MiniGames/ChooseLevel/ChooseLevel';
//
import { removeLocalStorageItem } from '../../../../../utils/loсalStorage';

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    width: '380px',
    backgroundColor: theme.palette.type === 'dark'
      ? '#43373D'
      : '#F6F4F5',
    padding: '1rem',
    margin: '2rem auto',
    borderRadius: '0.5rem',
    textAlign: 'center',
  },
}));

const NavListMenu = ({ label, links }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [gamePath, setGamePath] = React.useState('/sprint');
  const [gameName, setGameName] = React.useState('Спринт');

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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleGameClick = (path, name) => {
    removeLocalStorageItem('textBookLocation');
    setGamePath(path);
    setGameName(name);
    handleOpenModal();
    handleClose();
  };

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
              onClick={() => { handleGameClick(path, itemLabel); }}
            >
              {itemLabel}
            </MenuItem>
          ))
        }
      </Menu>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container className={classes.modalContainer}>
          <ChooseLevel
            gamePath={gamePath}
            handleCloseModal={handleCloseModal}
            gameName={gameName}
          />
        </Container>
      </Modal>
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

export { NavListMenu };
