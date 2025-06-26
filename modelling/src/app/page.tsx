import { PartyList } from "./feature/invitations/party_list";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PartyList />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
