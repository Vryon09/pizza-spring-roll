import { useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "./About";
import styles from "./Home.module.css";
import HomeHero from "./HomeHero";
import Order from "./Order";

function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const orderRef = useRef(null);

  return (
    <div className={styles.container}>
      <Header homeRef={homeRef} aboutRef={aboutRef} orderRef={orderRef} />
      <HomeHero homeRef={homeRef} orderRef={orderRef} />
      <About aboutRef={aboutRef} />
      <Order orderRef={orderRef} />
      <Footer homeRef={homeRef} aboutRef={aboutRef} orderRef={orderRef} />
    </div>
  );
}

export default Home;
