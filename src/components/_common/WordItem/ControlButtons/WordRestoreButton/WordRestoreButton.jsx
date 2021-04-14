import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
//
import { SettingsBackupRestore } from '@material-ui/icons';

const WordRestoreButton = ({ restoreWord }) => (
  <IconButton onClick={restoreWord}>
    <SettingsBackupRestore />
  </IconButton>
);

WordRestoreButton.propTypes = {
  restoreWord: PropTypes.func.isRequired,
};

export { WordRestoreButton };
