import * as React from 'react';
//
import { Login } from './Login';
import { Register } from './Register';
import { VerticalTabPage } from '../../_common';

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

console.log(Login, Register);

const Auth = () => (
  <VerticalTabPage
    ariaLabel="auth-tabs"
    config={tabsConfig}
  />
);

export { Auth };
