import styles from "./page.module.css";
import { AdditionForm } from "./feature";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AdditionForm />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
