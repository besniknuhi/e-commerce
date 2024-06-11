import styles from "./categoriesproducts.module.css";

export default function CategoriesProducts({ item }: any) {
  return (
    <div className={styles.gridItems}>
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
    </div>
  );
}
