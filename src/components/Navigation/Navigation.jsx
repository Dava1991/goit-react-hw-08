import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeNavLink : styles.navLink
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }
        >
          Tasks
        </NavLink>
      )}
    </div>
  );
}