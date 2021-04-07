import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Tab,
  Tabs,
  makeStyles,
} from '@material-ui/core';
//
import TabPanel from './TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: '1',
  },
  tabs: {
    minWidth: '140px',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  panel: {
    width: '100%',
    height: '100%',
  },
}));

const VerticalTabPage = ({ ariaLabel, config }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleTabChange = (_, newValue) => { setValue(newValue); };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleTabChange}
        orientation="vertical"
        aria-label={ariaLabel}
        className={classes.tabs}
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

export default React.memo(VerticalTabPage);
