import React from "react";
// import Navbar from "../Components/Navbar";
import TourHero from "../Components/TourHero";
// import CTA from "../Components/CTA";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";
import TourMain from "../Components/TourMain";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const DestinationPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="sec2">
      {/* <Navbar /> */}
      <TourHero 
        title={t.pages.destination.title}
        subtitle={t.pages.destination.description}
      />
      {/* <CTA /> */}
      <TourMain />
      <Quote />
      <Footer />
    </main>
  );
};

export default DestinationPage;
