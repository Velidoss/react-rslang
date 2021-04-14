import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
//
import { Delete } from '@material-ui/icons';

const WordDeleteButton = ({ deleteWord }) => (
  <IconButton onClick={deleteWord}>
    <Delete />
  </IconButton>
);

WordDeleteButton.propTypes = {
  deleteWord: PropTypes.func.isRequired,
};

export { WordDeleteButton };
