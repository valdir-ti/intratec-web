import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { SidebarProvider } from './context/sidebar/sidebarContext';
import { AuthProvider } from './context/authentication/authContext';

import { GlobalStyle } from './global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);