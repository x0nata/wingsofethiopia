import "../../src/Home.css";
// import Navbar from "../Components/Navbar";
import Description from "../Components/Description";
import About from "../Components/About";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";
import bg5 from "../assets/bg_5.jpg";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <main style={{ background: "none" }}>
      {/* <Navbar /> */}
      <div className="hero-section">
        <div>
          <div className="hero-title-orange">
            {t.heroWelcome}
          </div>
          <div className="hero-main-title">
            {t.heroTitle}
          </div>
          <div className="hero-description">
            {t.heroDescription}
          </div>
        </div>
      </div>
      <Description />
      <About />
      <Quote />
      <Footer />
    </main>
  );
};

export default HomePage;
