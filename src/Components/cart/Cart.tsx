import styles from "./cart.module.css";
import cartImg from "../../img/cart/empty-cart.png";
import cartIcon from "../../img/cart.svg";
import { useShoppingCart } from "../../context/cartContext";
import { items } from "../../assets/AllData";
import CartItem from "./CartItem";

interface CartProps {
  toggle: () => void;
  active: boolean;
}

export default function Cart({ toggle, active }: CartProps) {
  const { cartItems } = useShoppingCart();
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
            <img src={cartIcon} alt="cart" />
          </button>
        </div>
        <div className={styles.cartBody}>
          {cartItems.length === 0 && (
            <div className={styles.emptyCart}>
              <img src={cartImg} alt="" />
              <p>Your cart is empty</p>
              <button className={styles.emptyButton} onClick={toggle}>
                Keep Browsing
              </button>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className={styles.fullCart}>
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
              <div className={styles.cartTotal}>
                <div className={styles.total}>
                  <p>Total</p>
                  <p>
                    $
                    {cartItems.reduce((total, cartItem) => {
                      const item = items.find((i) => i.id == cartItem.id);
                      return total + (item?.price || 0) * cartItem.quantity;
                    }, 0)}
                  </p>
                </div>
                <button className={styles.checkout}>Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
