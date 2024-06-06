import styles from "./newsletter.module.css";

export default function Newsletter() {
  function handleSubmit(e: any) {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <section className={styles.newsection}>
      <div className={styles.container}>
        <h2>Newsletter</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
