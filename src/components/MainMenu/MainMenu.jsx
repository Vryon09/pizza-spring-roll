import styles from "./MainMenu.module.css";

function MainMenu({ style, homeRef, aboutRef, orderRef }) {
  function scrollIntoView(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={styles.container} style={style}>
      <ul>
        <li>
          <p onClick={() => scrollIntoView(homeRef)}>Home</p>
        </li>
        <li>
          <p onClick={() => scrollIntoView(aboutRef)}>About</p>
        </li>
        <li>
          <p onClick={() => scrollIntoView(orderRef)}>Order</p>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
