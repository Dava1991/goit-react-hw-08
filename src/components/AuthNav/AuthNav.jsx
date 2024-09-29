import { Link } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={styles.authNavContainer}>
      <Link to="/login" className={styles.authLink}>
        Login
      </Link>
      <Link to="/register" className={styles.authLink}>
        Register
      </Link>
    </div>
  );
}