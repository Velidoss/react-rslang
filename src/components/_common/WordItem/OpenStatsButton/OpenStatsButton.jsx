import * as React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
//
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

const OpenStatsButton = ({ isOpen, onClick }) => (
  <IconButton onClick={onClick}>
    {
      isOpen
        ? <KeyboardArrowUp />
        : <KeyboardArrowDown />
    }
  </IconButton>
);

OpenStatsButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { OpenStatsButton };
