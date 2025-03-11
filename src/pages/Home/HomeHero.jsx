import styles from "./HomeHero.module.css";

function HomeHero({ homeRef, orderRef }) {
  return (
    <div className={styles.container} ref={homeRef}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <h1>Baked, Cheesy, Delicious</h1>
          <p>Only Pizza Spring Roll in Sampaloc</p>
          <button
            onClick={() => {
              orderRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
