import * as React from 'react';
import { Button } from '@material-ui/core';

interface NavListMenuButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const NavListMenuButton: React.FC<NavListMenuButtonProps> = ({ 
  label, 
  onClick,
 }) => (
  <Button
    disableElevation
    variant="contained"
    color="primary"
    onClick={onClick}
  >
    {label}
  </Button>
);

export { NavListMenuButton };
