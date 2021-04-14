import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
//
import { TabPanel } from './TabPanel';
//
import styles from './VerticalTabPage.style';

const VerticalTabPage = ({ ariaLabel, config }) => {
  const classes = styles();
  const [value, setValue] = React.useState(0);
  const handleTabChange = (_, newValue) => { setValue(newValue); };

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

VerticalTabPage.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  config: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    tabId: PropTypes.string.isRequired,
    tabPanelId: PropTypes.string.isRequired,
    content: PropTypes.instanceOf(Object).isRequired,
  })).isRequired,
};

export { VerticalTabPage };
