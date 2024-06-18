import { Link } from "react-router-dom";
import styles from "./categoriesproducts.module.css";

export default function CategoriesProducts({ item }: any) {
  return (
    <div className={styles.gridItems}>
      <div key={item.id} className={styles.gridUnit}>
        <Link
          onClick={() => {
            if (window.top) {
              window.top.scrollTo(0, 0);
            } else {
              console.error("window.top is null");
            }
          }}
          to={`/categories/product/${item.id}`}
        >
          <div className={styles.header}>
            <img src={item.img} alt="" />
          </div>
          <div className={styles.description}>
            <p>{item.description}</p>
            <p className={styles.price}>${item.price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
