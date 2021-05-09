import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2f2f2f',
    },
    secondary: {
      main: '#e03e87',
    },
    error: {
      main: '#e8190a',
    },
    success: {
      main: '#4caf50',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Lobster',
    },
    h2: {
      fontWeight: '100',
    },
  },
});

export default responsiveFontSizes(theme, { factor: 5 });
