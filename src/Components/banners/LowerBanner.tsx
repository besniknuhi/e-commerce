import styles from "./banner.module.css";
//banner pic
import bannerImg from "../../img/banner/banner2.jpg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.img}>
            <img src={bannerImg} alt="" />
          </div>
          <div className={styles.text}>
            <div>
              <h2>Creative harmonious living</h2>
              <p>
                RAOUF Products are all made to standard sizes so that you can
                mix and match them freely.
              </p>
            </div>
            <Link to="/categories">
              <button onClick={() => window.scrollTo(0, 0)}>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
