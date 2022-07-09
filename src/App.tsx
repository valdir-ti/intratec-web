import AppRoutes from './components/AppRoutes';

import { SidebarProvider } from './context/sidebar/sidebarContext';
import { AuthProvider } from './context/authentication/authContext';

import { GlobalStyle } from './global';

const App = () => {
  return (
    <>
        <GlobalStyle />
        <AuthProvider>
        <SidebarProvider>
            <AppRoutes />
        </SidebarProvider>
        </AuthProvider>
    </>
  )
}

export default App