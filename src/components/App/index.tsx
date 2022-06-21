import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from '../../pages/Home';
import Login from "../../pages/Login";
import List from "../List";
import Single from "../Single";

import { AuthContext } from '../../context/authentication/authContext';

import './styles.scss'

const App = () => {

  const { state: { currentUser } } = useContext(AuthContext)

  const RequireAuth = ({ children }: any) => {
    return currentUser ? (children) : <Navigate to='/login' />
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
