import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//
import App from './App';
import store from './store/store';
import { AuthProvider } from './contexts/AuthContext';
import { CustomThemeProvider } from './contexts/CustomThemeContext';
//
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';
import '@fontsource/lobster';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
