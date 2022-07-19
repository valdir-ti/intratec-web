import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import New from "../New";
import List from "../List";
import Single from "../Single";
import NotFound from "../NotFound";
import Home from '../../pages/Home';
import Login from "../../pages/Login";

import { AuthContext } from '../../context/authentication/authContext';

import { productInputs, userInputs } from "../../formSource";

import './styles';

const AppRoutes = () => {

  const { state: { currentUser } } = useContext(AuthContext)

  const RequireAuth = ({ children }: any) => {
    return currentUser ? (children) : <Navigate to='/login' />
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="*" element={<NotFound />} />
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
                    <List item="User" slug="users" />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add new user"/>
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
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="Product" slug="products" />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add new product"/>
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="companies">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="Company" slug="companies" />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add new company"/>
                  </RequireAuth>
                }
              />
              <Route
                path=":companyId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="orders">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="Order" slug="orders" />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add new order"/>
                  </RequireAuth>
                }
              />
              <Route
                path=":orderId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="stats">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="User" slug="users"/>
                  </RequireAuth>
                }
              />
              <Route
                path=":statId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="notifications">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="User" slug="users"/>
                  </RequireAuth>
                }
              />
              <Route
                path=":notificationId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="system-health">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="User" slug="users"/>
                  </RequireAuth>
                }
              />
              <Route
                path=":systemHealthId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="logs">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="User" slug="users"/>
                  </RequireAuth>
                }
              />
              <Route
                path=":logId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="settings">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="User" slug="users"/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="profile">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="User" slug="users"/>
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes
