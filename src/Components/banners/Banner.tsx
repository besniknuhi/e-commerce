import styles from "./banner.module.css";
//banner pic
import bannerImg from "../../img/banner/banner1.jpg";

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.text}>
            <div>
              <h2>Creative harmonious living</h2>
              <p>
                RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>
            </div>
            <a href="">
              <button>Shop Now</button>
            </a>
          </div>
          <div className={styles.img}>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
