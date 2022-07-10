import AppRoutes from './components/AppRoutes';

import { SidebarProvider } from './context/sidebar/sidebarContext';
import { AuthProvider } from './context/authentication/authContext';

const App = () => {

  return (
    <>
        <AuthProvider>
          <SidebarProvider>
              <AppRoutes />
          </SidebarProvider>
        </AuthProvider>
    </>
  )
}

export default App