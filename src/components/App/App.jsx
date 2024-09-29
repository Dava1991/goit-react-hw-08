import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));

const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);

function App() {
  const isRefresh = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        {isRefresh ? (
          <b>Refreshing user, please wait...</b>
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route
                path="/register"
                element={<RestrictedRoute component={<RegistrationPage />} />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={<LoginPage />} />}
              />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </div>
  );
}

export default App;