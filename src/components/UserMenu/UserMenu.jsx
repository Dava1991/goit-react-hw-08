import { useSelector, useDispatch } from "react-redux";

import { selectorUser, selectorLoading } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations.js";

import LoaderProgress from "../Loader/LoaderProgress";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const user = useSelector(selectorUser);
  const loading = useSelector(selectorLoading);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className={styles.userMenu}>
      <span className={styles.welcome}>Welcome, {user.name}</span>
      <button className={styles.logoutButton} onClick={handleClick}>
        {!loading ? "Log Out" : <LoaderProgress />}
      </button>
    </div>
  );
}