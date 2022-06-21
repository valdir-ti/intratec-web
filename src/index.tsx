import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';

import { SidebarProvider } from './context/sidebar/sidebarContext';
import { AuthProvider } from './context/authentication/authContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);