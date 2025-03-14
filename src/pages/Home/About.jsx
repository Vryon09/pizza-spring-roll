import styles from "./About.module.css";
import { motion } from "motion/react";

function About({ aboutRef }) {
  return (
    <div className={styles.container} ref={aboutRef}>
      <div className={styles.innerContainer}>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.framer}
        >
          <p>
            We believe food should be exciting. Our journey started with a love
            for pizza and a craving for something delicious. That’s when we
            created the Pizza Spring Roll.{" "}
            <span>A snack that’s portable, flavorful, and irresistible.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
