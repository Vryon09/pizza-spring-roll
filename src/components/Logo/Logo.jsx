import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <img src="/brand-logo.png" alt="Pizza Spring Roll Logo" />
    </div>
  );
}

export default Logo;
