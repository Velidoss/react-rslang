import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const HeaderButton = ({ label, ...buttonProps }) => (
  <Button
    disableElevation
    variant="contained"
    color="primary"
    {...buttonProps}
  >
    {label}
  </Button>
);

HeaderButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export { HeaderButton };
