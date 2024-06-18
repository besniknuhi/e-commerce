import styles from "./trendingitems.module.css";
import { items } from "../../assets/AllData";
import { Link } from "react-router-dom";

export default function TrendingItems() {
  const filteredItems = items.filter((item) => item.id >= 8);

  return filteredItems.map((item) => (
    <div key={item.id} className={styles.item}>
      <Link
        onClick={() => {
          if (window.top) {
            window.top.scrollTo(0, 0);
          }
        }}
        to={`/categories/product/${item.id}`}
      >
        <div className={styles.imgContainer}>
          <img src={item.img} alt="product" />
        </div>
        <div className={styles.itemDescription}>
          <p>{item.description}</p>
          <p className={styles.price}>${item.price}</p>
        </div>
      </Link>
    </div>
  ));
}
