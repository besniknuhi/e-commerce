import styles from "./home.module.css";

//images
import homeImg from "../../img/header/home-img-1.jpg";
import skinCareImg from "../../img/header/home-img-2.jpg";
import kitchenImg from "../../img/header/home-img-3.jpg";
import electronicsImg from "../../img/header/home-img-4.jpg";

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={`${styles.featured} ${styles.gridOne}`}>
            <a href="">
              <div className={styles.overlay}></div>
              <img className={styles.img} src={homeImg} alt="home products" />
              <p className={styles.description}>Live Comfortably</p>
            </a>
          </div>
          <div className={`${styles.featured} ${styles.gridTwo}`}>
            <a href="">
              <div className={styles.overlay}></div>
              <img
                className={styles.img}
                src={skinCareImg}
                alt="skin care products"
              />
              <p className={styles.description}>Skincare</p>
            </a>
          </div>
          <div className={`${styles.featured} ${styles.gridFour}`}>
            <a href="">
              <div className={styles.overlay}></div>
              <img
                className={styles.img}
                src={kitchenImg}
                alt="kitchen products"
              />
              <p className={styles.description}>Kitchen</p>
            </a>
          </div>
          <div className={`${styles.featured} ${styles.gridFourLow}`}>
            <a href="">
              <div className={styles.overlay}></div>
              <img
                className={styles.img}
                src={electronicsImg}
                alt="Electronic products"
              />
              <p className={styles.description}>Electronics</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
