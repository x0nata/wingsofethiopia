import React from "react";
import "./Home.css";
import AboutHero from "../Components/AboutHero";
import Description from "../Components/Description";
import About from "../Components/About";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.about;

  return (
    <main className="sec2">
      <AboutHero />
      <Description />
      <About />
      <Quote />
      <Footer />
    </main>
  );
};

export default AboutPage;
