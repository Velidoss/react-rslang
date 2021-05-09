import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
//
import { Delete } from '@material-ui/icons';

interface WordDeleteButtonProps {
  deleteWord(): void;
}

const WordDeleteButton: React.FC<WordDeleteButtonProps> = ({ deleteWord }) => (
  <Tooltip title="удаленные">
    <IconButton onClick={deleteWord}>
      <Delete />
    </IconButton>
  </Tooltip>
);

export { WordDeleteButton };
