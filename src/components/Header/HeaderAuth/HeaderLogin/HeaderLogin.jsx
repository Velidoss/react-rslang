import * as React from 'react';
import { IconButton } from '@material-ui/core';
//
import { Person } from '@material-ui/icons';
//
import AuthModal from './AuthModal/AuthModal';

const HeaderLogin = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const toggleModal = () => { setModalOpen(!isModalOpen); };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={toggleModal}
      >
        <Person />
      </IconButton>
      <AuthModal open={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default React.memo(HeaderLogin);
