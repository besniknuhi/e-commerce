import Product from "./Product";
import styles from "./products.module.css";

export default function Products() {
  return (
    <section className={styles.productsContainer}>
      <h2 className={`${styles.title} ${styles.container}`}>
        Highlighted Products
      </h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Product />
        </div>
      </div>
    </section>
  );
}
