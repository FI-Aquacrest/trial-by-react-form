import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import lightThemeOptions from './themes/lightThemeOptions';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme(lightThemeOptions);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0yuvhzezjxqq2qjx.us.auth0.com"
      clientId="w9g9wV7kCKhFyJcZptWGxyQHPFbKuyfs"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
