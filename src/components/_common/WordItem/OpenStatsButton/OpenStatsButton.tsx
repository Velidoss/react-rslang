import * as React from 'react';
import { IconButton } from '@material-ui/core';
//
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

interface OpenStatsButtonProps {
  isOpen: boolean;
  onClick(): void;
}

const OpenStatsButton: React.FC<OpenStatsButtonProps> = ({ isOpen, onClick }) => (
  <IconButton onClick={onClick}>{isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</IconButton>
);

export { OpenStatsButton };
