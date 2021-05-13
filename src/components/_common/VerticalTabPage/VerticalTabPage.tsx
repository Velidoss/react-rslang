import * as React from 'react';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
//
import { TabPanel } from './TabPanel';
//
import styles from './VerticalTabPage.style';
import ITabConfig from './../../../interfaces/ITabConfig';

interface VerticalTabPageProps {
  ariaLabel: string; 
  config: ITabConfig[];
}

const VerticalTabPage: React.FC<VerticalTabPageProps> = ({ ariaLabel, config }) => {
  const classes = styles();
  const [value, setValue] = React.useState<number>(0);
  const handleTabChange = (_: any, newValue: number) => { setValue(newValue); };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleTabChange}
        aria-label={ariaLabel}
        className={classes.tabs}
        orientation="vertical"
      >
        {
          config.map(({ label, tabId, tabPanelId }) => (
            <Tab
              key={label}
              label={label}
              id={tabId}
              aria-controls={tabPanelId}
            />
          ))
        }
      </Tabs>
      <div className={classes.content}>
        {
        config.map(({
          content, label, tabId, tabPanelId,
        }, index) => (
          <TabPanel
            key={label}
            value={value}
            index={index}
            tabId={tabId}
            tabPanelId={tabPanelId}
            className={classes.panel}
          >
            {React.createElement(content)}
          </TabPanel>
        ))
      }
      </div>
    </div>
  );
};

export { VerticalTabPage };
