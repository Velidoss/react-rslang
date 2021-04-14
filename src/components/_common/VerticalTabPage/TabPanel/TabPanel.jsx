import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const TabPanel = ({
  children,
  value,
  index,
  tabPanelId,
  tabId,
  ...wrapperProps
}) => (
  <Box
    role="tabpanel"
    hidden={value !== index}
    aria-labelledby={tabId}
    id={tabPanelId}
    {...wrapperProps}
  >
    {children}
  </Box>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  tabPanelId: PropTypes.string.isRequired,
  tabId: PropTypes.string.isRequired,
};

export { TabPanel };
