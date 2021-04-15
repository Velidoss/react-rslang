import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
//
import { SettingsBackupRestore } from '@material-ui/icons';

const WordRestoreButton = ({ restoreWord }) => (
  <Tooltip title="восстановить">
    <IconButton onClick={restoreWord}>
      <SettingsBackupRestore />
    </IconButton>
  </Tooltip>
);

WordRestoreButton.propTypes = {
  restoreWord: PropTypes.func.isRequired,
};

export { WordRestoreButton };
