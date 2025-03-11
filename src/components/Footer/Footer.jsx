import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";
import styles from "./Footer.module.css";

const menuStyle = {
  fontSize: "1rem",
  color: "black",
};

function Footer({ homeRef, aboutRef, orderRef }) {
  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <MainMenu
          style={menuStyle}
          homeRef={homeRef}
          aboutRef={aboutRef}
          orderRef={orderRef}
        />

        <Logo />

        <div className={styles.copyright}>
          <p>© 2025 Pizza Spring Roll</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
