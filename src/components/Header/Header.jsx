import { Menu } from "lucide-react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import MainMenu from "../MainMenu/MainMenu";
import PopupMenu from "./PopupMenu";
import { useState } from "react";

function Header({ homeRef, aboutRef, orderRef }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Logo />

        <div className={styles.hamburgerMenu} onClick={() => setIsOpen(true)}>
          <Menu size={"2rem"} />
        </div>
        <PopupMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          homeRef={homeRef}
          aboutRef={aboutRef}
          orderRef={orderRef}
        />

        <MainMenu homeRef={homeRef} aboutRef={aboutRef} orderRef={orderRef} />
      </div>
    </div>
  );
}

export default Header;
