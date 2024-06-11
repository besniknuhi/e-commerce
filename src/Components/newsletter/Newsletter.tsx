import React, { useState } from "react";
import styles from "./newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      e.target.reset();
    }
    setEmail("");
  }

  return (
    <section className={styles.newsection}>
      <div className={styles.container}>
        <h2>Newsletter</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
