import styles from "./cart.module.css";
import cartImg from "../../img/cart/empty-cart.png";

interface CartProps {
  toggle: () => void;
  active: boolean;
}

export default function Cart({ toggle, active }: CartProps) {
  return (
    <>
      <div
        onClick={toggle}
        className={`${styles.pageOverlay} ${active ? styles.overActive : ""}`}
      ></div>
      <div className={`${styles.cartContainer} ${active ? styles.active : ""}`}>
        <div className={styles.cartTitle}>
          <h2>Your Shopping Cart (0)</h2>
          <button onClick={toggle}>
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
              className="tabler-icon tabler-icon-x"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className={styles.cartBody}>
          <div className={styles.emptyCart}>
            <img src={cartImg} alt="" />
            <p>Your cart is empty</p>
            <button className={styles.emptyButton} onClick={toggle}>
              Keep Browsing
            </button>
          </div>
          <div className={styles.fullCart}></div>
        </div>
      </div>
    </>
  );
}
