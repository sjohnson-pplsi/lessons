import { PartyListHttp } from "./feature/invitations/party_list";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PartyListHttp />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
