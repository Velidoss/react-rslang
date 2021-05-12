import * as React from 'react';
import { Button } from '@material-ui/core';

interface HeaderButtonProps {
  label: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ label, ...buttonProps }) => (
  <Button
    disableElevation
    variant="contained"
    color="primary"
    {...buttonProps}
  >
    {label}
  </Button>
);

export { HeaderButton };
