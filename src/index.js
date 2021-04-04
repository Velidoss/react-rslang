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
import '@fontsource/lobster';
import AudioContextState from './context/AudioContextState';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <CustomThemeProvider>
            <AudioContextState>
              <App />
            </AudioContextState>
          </CustomThemeProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
