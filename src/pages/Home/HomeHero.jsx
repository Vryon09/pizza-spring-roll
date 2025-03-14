import styles from "./HomeHero.module.css";
import { motion } from "motion/react";

function HomeHero({ homeRef, orderRef }) {
  return (
    <div className={styles.container} ref={homeRef}>
      <div className={styles.innerContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.framer}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default HomeHero;
