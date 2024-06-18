import styles from "./product.module.css";
import { items } from "../../assets/AllData";
import { Link } from "react-router-dom";

export default function Product() {
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <>
      {filteredItems.map((item) => (
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
      ))}
    </>
  );
}
