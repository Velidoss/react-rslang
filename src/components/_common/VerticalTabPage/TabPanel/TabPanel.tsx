import * as React from 'react';
import { Box } from '@material-ui/core';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
  tabPanelId: string;
  tabId: string;
  className: any;
}

const TabPanel: React.FC<TabPanelProps> = ({
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

export { TabPanel };
