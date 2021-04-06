import * as React from 'react';
import PropTypes from 'prop-types';
//
import { expirationTimeoutDelta } from '../constants/authConstants';
//
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from '../utils/logalStorage';

const AuthContext = React.createContext();
const AuthChangeContext = React.createContext();
const useAuth = () => React.useContext(AuthContext);
const useAuthChange = () => React.useContext(AuthChangeContext);
const initialAuth = {
  token: null,
  refreshToken: null,
  expirationTimestamp: null,
  name: null,
  avatar: null,
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(initialAuth);

  const login = ({
    token = null,
    refreshToken = null,
    name,
    avatar,
  } = {}) => {
    if (!token || !refreshToken) {
      return;
    }

    const newAuth = {
      token,
      refreshToken,
      expirationTimestamp: Date.now() + expirationTimeoutDelta,
      name,
      avatar,
    };

    setLocalStorageItem('auth', newAuth);
    setAuth(newAuth);
  };

  const logout = () => {
    setAuth(initialAuth);
    removeLocalStorageItem('auth');
  };

  React.useEffect(() => {
    const {
      token, refreshToken, expirationTimestamp, name, avatar,
    } = getLocalStorageItem('auth', initialAuth);
    const isTokenValid = token && expirationTimestamp && expirationTimestamp > Date.now();

    if (isTokenValid) {
      setAuth({
        token, refreshToken, expirationTimestamp, name, avatar,
      });
    } else {
      removeLocalStorageItem('auth');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth: !!auth.token, auth }}>
      <AuthChangeContext.Provider value={{ login, logout }}>
        {children}
      </AuthChangeContext.Provider>
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  AuthProvider,
  useAuth,
  useAuthChange,
};
