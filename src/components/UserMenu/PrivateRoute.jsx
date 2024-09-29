import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../redux/auth/selectors";

import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component }) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to="/login" />;
}