import * as React from 'react';
import { Button } from '@material-ui/core';

interface NavListLinkButtonProps {
  label: string;
  component: any;
  to: string;
}

const NavListLinkButton: React.FC<NavListLinkButtonProps> = ({ 
  label, 
  component,
  to
 }) => (
  <Button
    disableElevation
    variant="contained"
    color="primary"
    component={component}
    to={to}
  >
    {label}
  </Button>
);

export { NavListLinkButton };
