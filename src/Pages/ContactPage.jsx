import React from "react";
// import Navbar from "../Components/Navbar";
import ContactHero from "../Components/ContactHero";
import ContactForm from "../Components/ContactForm";
import Quote from "../Components/Quote";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const ContactPage = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.contact;

  return (
    <main className="sec2">
      {/* <Navbar /> */}
      <ContactHero />
      <ContactForm />
      <Quote />
      <Footer />
    </main>
  );
};

export default ContactPage;
