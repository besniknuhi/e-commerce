import TrendingItems from "./TrendingItems";
import styles from "./trending.module.css";

export default function Trending() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 235;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 235;
    }
  };

  return (
    <section className={styles.trendingContainer}>
      <div className={styles.container}>
        <div>
          <div className={styles.trending}>
            <h3>Trending Now</h3>
            <div className={styles.buttons}>
              <button onClick={slideLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-arrow-left"
                >
                  <path d="M5 12l14 0"></path>
                  <path d="M5 12l6 6"></path>
                  <path d="M5 12l6 -6"></path>
                </svg>
              </button>
              <button onClick={slideRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-arrow-right"
                >
                  <path d="M5 12l14 0"></path>
                  <path d="M13 18l6 -6"></path>
                  <path d="M13 6l6 6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.row} id="slider">
            <TrendingItems />
          </div>
        </div>
      </div>
    </section>
  );
}
