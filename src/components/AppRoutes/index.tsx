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
import FormUser from "../FormUser";
import NotFound from "../NotFound";
import Home from '../../pages/Home';
import Login from "../../pages/Login";
import FormProduct from "../FormProduct";
import FormCompany from "../FormCompany";
import FormCategory from "../FormCategory";

import { AuthContext } from '../../context/authentication/authContext';

import { productInputs } from "../../formSource";

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
                    <FormUser title="Add new user"/>
                  </RequireAuth>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <RequireAuth>
                    <FormUser title="Edit user" isEditing/>
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='users'/>
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
                    <FormProduct />
                  </RequireAuth>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <RequireAuth>
                    <FormProduct isEditing/>
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='products'/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="categories">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="Category" slug="categories" />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <FormCategory />
                  </RequireAuth>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <RequireAuth>
                    <FormCategory isEditing/>
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='categories'/>
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
                    <FormCompany />
                  </RequireAuth>
                }
              />
              <Route
                path="edit/:id"
                element={
                  <RequireAuth>
                    <FormCompany isEditing/>
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='companies'/>
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="orders">
              <Route
                index
                element={
                  <RequireAuth>
                    <List item="Order" slug="users" />
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
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='users'/>
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
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='stats'/>
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
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='users'/>
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
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='users'/>
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
                path=":id"
                element={
                  <RequireAuth>
                    <Single slug='users'/>
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
