import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

import styles from "./AppBar.module.css";
import { selectorIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function AppBar() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <header>
      <div className={styles.appBar}>
        <div className={styles.navSection}>
          <Navigation />
        </div>

        {isLoggedIn ? (
          <div className={styles.userMenu}>
            <UserMenu />
          </div>
        ) : (
          <div className={styles.authNav}>
            <AuthNav />
          </div>
        )}
      </div>
    </header>
  );
}