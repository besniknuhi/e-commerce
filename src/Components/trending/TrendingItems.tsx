import styles from "./trendingitems.module.css";

import { items } from "../../assets/AllData";

export default function TrendingItems() {
  const filteredItems = items.filter((item) => item.id >= 8);

  return filteredItems.map((item) => (
    <div key={item.id} className={styles.item}>
      <a href="">
        <div className={styles.imgContainer}>
          <img src={item.img} alt="" />
        </div>
        <div className={styles.itemDescription}>
          <p>{item.description}</p>
          <p className={styles.price}>${item.price}</p>
        </div>
      </a>
    </div>
  ));
}
