import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
//
import { SettingsBackupRestore } from '@material-ui/icons';

const DeletedWordButton = ({ deleteWordFromDifficult }) => (
  <IconButton onClick={deleteWordFromDifficult}>
    <SettingsBackupRestore />
  </IconButton>
);

DeletedWordButton.propTypes = {
  deleteWordFromDifficult: PropTypes.func.isRequired,
};

export default DeletedWordButton;
