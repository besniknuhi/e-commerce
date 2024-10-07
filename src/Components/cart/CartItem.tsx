import { items } from "../../assets/AllData";
import { useShoppingCart } from "../../context/cartContext";
import styles from "./cart.module.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } =
    useShoppingCart();
  console.log(items);
  const item = items.find((i) => i.id == id);
  if (item == null) return null;
  console.log(item);

  return (
    <div key={item?.id} className={styles.cartItem}>
      <div>
        <img src={item?.img} alt="item image" />
      </div>
      <div className={styles.itemDetails}>
        <h3>{item?.description}</h3>
        <p>${item!.price * quantity}</p>
        <div className={styles.quantity}>
          <button
            onClick={
              quantity === 0
                ? () => removeFromCart
                : () => decreaseItemQuantity(id)
            }
          >
            -
          </button>
          <p>{quantity}</p>
          <button onClick={() => increaseItemQuantity(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
