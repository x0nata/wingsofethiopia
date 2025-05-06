import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const ContactHero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="min-h-[50vh] container mx-auto flex flex-col items-center relative mb-8">
      <motion.div
        ref={myRef}
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="text-center z-[2] mt-[100px] sm:mt-[150px]"
      >
        <div className="flex items-center justify-center space-x-4 text-white/80 text-lg mb-6">
          <Link
            to="/"
            className="hover:text-Orange transition-colors duration-300"
          >
            {t.home}
          </Link>
          <span className="text-Orange">/</span>
          <span className="text-Orange">{t.contact}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t.contactTitle}
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
          {t.contactSubtitle}
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
