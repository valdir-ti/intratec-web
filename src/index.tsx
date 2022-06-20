import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';

import { SidebarProvider } from './context/SidebarContext';

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);