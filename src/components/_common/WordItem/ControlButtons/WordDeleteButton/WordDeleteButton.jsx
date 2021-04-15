import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
//
import { Delete } from '@material-ui/icons';

const WordDeleteButton = ({ deleteWord }) => (
  <Tooltip title="удаленные">
    <IconButton onClick={deleteWord}>
      <Delete />
    </IconButton>
  </Tooltip>
);

WordDeleteButton.propTypes = {
  deleteWord: PropTypes.func.isRequired,
};

export { WordDeleteButton };
