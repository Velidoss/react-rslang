import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
//
import { SettingsBackupRestore } from '@material-ui/icons';

const WordRestoreButton = ({ restoreCallback }) => (
  <IconButton onClick={restoreCallback}>
    <SettingsBackupRestore />
  </IconButton>
);

WordRestoreButton.propTypes = {
  restoreCallback: PropTypes.func.isRequired,
};

export { WordRestoreButton };
