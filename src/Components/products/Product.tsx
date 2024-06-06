import styles from "./product.module.css";
import { items } from "../../assets/AllData";

export default function Product() {
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className={styles.gridUnit}>
          <a href="">
            <div className={styles.header}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.description}>
              <p>{item.description}</p>
              <p className={styles.price}>${item.price}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
