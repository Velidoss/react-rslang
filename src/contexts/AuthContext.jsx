import * as React from 'react';
import PropTypes from 'prop-types';
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
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(initialAuth);

  const login = ({
    token = null,
    refreshToken = null,
  } = {}) => {
    if (!token || !refreshToken) {
      return;
    }

    const newAuth = {
      token,
      refreshToken,
      expirationTimestamp: Date.now() + 3_600_000,
    };

    setLocalStorageItem('auth', newAuth);
    setAuth(newAuth);
  };

  const logout = () => {
    setAuth(null);
    removeLocalStorageItem('auth');
  };

  React.useEffect(() => {
    const { token, refreshToken, expirationTimestamp } = getLocalStorageItem('auth', initialAuth);
    const isTokenValid = token && expirationTimestamp && expirationTimestamp > Date.now();

    if (isTokenValid) {
      setAuth({ token, refreshToken, expirationTimestamp });
    } else {
      removeLocalStorageItem('auth');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth: !!auth.token }}>
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
