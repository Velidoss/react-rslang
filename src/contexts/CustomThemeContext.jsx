import * as React from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core';
//
import * as themes from '../themes/index';

const CustomThemeContext = React.createContext();
const useCustomTheme = () => React.useContext(CustomThemeContext);

const CustomThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeParams, setThemeParams] = React.useState({
    theme: prefersDarkMode ? themes.dark : themes.light,
    themeName: prefersDarkMode ? 'dark' : 'ligth',
  });

  const changeTheme = (value) => {
    setThemeParams({
      themeName: value,
      theme: themes[value],
    });
  };

  return (
    <ThemeProvider theme={themeParams.theme}>
      <CustomThemeContext.Provider value={changeTheme}>
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
