import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectorIsLoggedIn } from "../redux/auth/selectors";

export default function RestrictedRoute({ component: Component }) {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : Component;
}