import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Error404: React.FC = () => (
  <Typography>
    <Box component="h1">
      404
    </Box>
    <Box component="h3">
      This page does not exist
    </Box>

  </Typography>
);

export { Error404 };
