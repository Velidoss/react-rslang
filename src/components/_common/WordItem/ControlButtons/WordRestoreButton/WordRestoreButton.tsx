import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
//
import { SettingsBackupRestore } from '@material-ui/icons';

interface WordRestoreButtonProps {
  restoreWord(): void;
}

const WordRestoreButton: React.FC<WordRestoreButtonProps> = ({ restoreWord }) => (
  <Tooltip title="восстановить">
    <IconButton onClick={restoreWord}>
      <SettingsBackupRestore />
    </IconButton>
  </Tooltip>
);

export { WordRestoreButton };
