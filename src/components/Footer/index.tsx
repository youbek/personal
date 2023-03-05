import { GitHub } from "react-feather";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© Yusufbek Alimatov 2023</p>
        <a
          href="https://github.com/youbek/personal"
          title="Edit this page on GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </div>
  );
}
