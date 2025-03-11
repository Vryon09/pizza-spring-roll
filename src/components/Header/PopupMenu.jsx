import { X } from "lucide-react";
import styles from "./PopupMenu.module.css";

function PopupMenu({ isOpen, setIsOpen, homeRef, aboutRef, orderRef }) {
  function scrollIntoView(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={styles.container} style={isOpen ? { top: 0 } : {}}>
      <div className={styles.close} onClick={() => setIsOpen(false)}>
        <X color="white" size="2rem" />
      </div>
      <ul className={styles.menus}>
        <li
          onClick={() => {
            setIsOpen(false);
            scrollIntoView(homeRef);
          }}
        >
          <p>Home</p>
        </li>
        <li
          onClick={() => {
            setIsOpen(false);
            scrollIntoView(aboutRef);
          }}
        >
          <p>About</p>
        </li>
        <li
          onClick={() => {
            setIsOpen(false);
            scrollIntoView(orderRef);
          }}
        >
          <p>Order</p>
        </li>
      </ul>
    </nav>
  );
}

export default PopupMenu;
