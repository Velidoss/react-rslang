import * as React from 'react';
//
import Login from './Login/Login';
import Register from './Register/Register';
import VerticalTabPage from '../../_common/VertialTabPage';

const tabsConfig = [
  {
    label: 'Логин',
    tabId: 'auth-tab-0',
    tabPanelId: 'auth-tabpanel-0',
    content: Login,
  },
  {
    label: 'Регистрация',
    tabId: 'auth-tab-1',
    tabPanelId: 'auth-tabpanel-1',
    content: Register,
  },
];

const Auth = () => (
  <VerticalTabPage
    ariaLabel="auth-tabs"
    config={tabsConfig}
  />
);

export default React.memo(Auth);
