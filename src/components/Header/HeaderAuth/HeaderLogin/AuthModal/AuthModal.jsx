import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  Tabs,
  Tab,
  DialogContent,
} from '@material-ui/core';
//
import TabPanel from '../../../../_common/TabPanel';
import Login from './Login/Login';
import Register from './Register/Register';

const tabsConfig = [
  {
    index: 0,
    label: 'Логин',
    tabId: 'auth-tab-0',
    tabPanelId: 'auth-tabpanel-0',
    content: Login,
  },
  {
    index: 1,
    label: 'Регистрация',
    tabId: 'auth-tab-1',
    tabPanelId: 'auth-tabpanel-1',
    content: Register,
  },
];

const AuthModal = ({ open, onClose }) => {
  const [value, setValue] = React.useState(0);
  const handleTabChange = (_, newValue) => { setValue(newValue); };

  return (
    <Dialog
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogActions>
        <Tabs value={value} onChange={handleTabChange}>
          {
            tabsConfig.map(({ label, tabId, tabPanelId }) => (
              <Tab
                key={label}
                label={label}
                id={tabId}
                aria-controls={tabPanelId}
              />
            ))
          }
        </Tabs>
      </DialogActions>
      <DialogContent>
        {
          tabsConfig.map((config) => (
            <TabPanel key={config.label} value={value} {...config}>
              {React.createElement(config.content, { onClose })}
            </TabPanel>
          ))
        }
      </DialogContent>
    </Dialog>
  );
};

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(AuthModal);
