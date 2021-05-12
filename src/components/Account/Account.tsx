import * as React from 'react';
//
import { Auth } from './Auth/Auth';
import { Profile } from './Profile/Profile';
//
import { useAuth } from '../../contexts/AuthContext';

const Account: React.FC = () => {
  const { isAuth } = useAuth();

  return isAuth
    ? <Profile />
    : <Auth />;
};

export { Account };
