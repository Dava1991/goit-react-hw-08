import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Your Contact Book</h1>
      <p className={styles.description}>
        Keep track of all your contacts in one place. Add, edit, and delete
        contacts easily with our user-friendly interface.
      </p>
      <p className={styles.footer}>Created by Oleksandr Humeniuk</p>
    </div>
  );
}