import styles from "./About.module.css";

function About({ aboutRef }) {
  return (
    <div className={styles.container} ref={aboutRef}>
      <div className={styles.innerContainer}>
        <p>
          We believe food should be exciting. Our journey started with a love
          for pizza and a craving for something delicious. That’s when we
          created the Pizza Spring Roll.{" "}
          <span>
            A snack that’s portable, flavorful, and irresistibly crunchy.
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
