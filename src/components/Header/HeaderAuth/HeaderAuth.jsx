import * as React from 'react';
//
import HeaderLogin from './HeaderLogin/HeaderLogin';
import HeaderProfile from './HeaderProfile/HeaderProfile';
//
import { useAuth } from '../../../contexts/AuthContext';

const HeaderAuth = () => {
  const { isAuth } = useAuth();

  return isAuth ? <HeaderProfile /> : <HeaderLogin />;
};

export default React.memo(HeaderAuth);
