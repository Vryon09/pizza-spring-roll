import { Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import MainMenu from "../MainMenu/MainMenu";

function Header({ homeRef, aboutRef, orderRef }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Logo />

        <div className={styles.hamburgerMenu}>
          <Menu size={"2rem"} />
        </div>

        <MainMenu homeRef={homeRef} aboutRef={aboutRef} orderRef={orderRef} />
      </div>
    </div>
  );
}

export default Header;
