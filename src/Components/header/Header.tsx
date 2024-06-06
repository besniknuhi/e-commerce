import styles from "./header.module.css";
import logo from "../../img/newlogo2.png";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navcontainer}>
          <a href="">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <ul className={styles.navlist}>
            <li>
              <a href="">categories</a>
            </li>
            <li>
              <a href="">product page</a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17h-11v-14h-2"></path>
                  <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
