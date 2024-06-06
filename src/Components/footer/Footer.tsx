import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <div className={styles.footerNav}>
          <ul className={styles.footerList}>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Store Locator</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <p className={styles.credits}>
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Abderraouf-Rahmani"
          >
            &nbsp; Abderraouf
          </a>
        </p>
      </div>
    </footer>
  );
}
