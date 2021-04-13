import * as React from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core';
//
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils/loсalStorage';
//
import * as themes from '../themes';

const CustomThemeContext = React.createContext();
const useCustomTheme = () => React.useContext(CustomThemeContext);

const CustomThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredTheme = prefersDarkMode ? 'dark' : 'light';
  const currentThemeName = getLocalStorageItem('theme', preferredTheme);
  const [theme, setTheme] = React.useState(themes[currentThemeName]);
  const [themeName, setThemeName] = React.useState(currentThemeName);

  const changeTheme = (value) => {
    setTheme(themes[value]);
    setThemeName(value);
    setLocalStorageItem('theme', value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{ changeTheme, isDark: themeName === 'dark' }}>
        <CssBaseline />
        {children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  CustomThemeProvider,
  useCustomTheme,
};
