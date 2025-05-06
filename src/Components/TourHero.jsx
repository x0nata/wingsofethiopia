import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const TourHero = ({ title, subtitle }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
    <section className={`${isHomePage ? 'sec2-home' : 'sec2'} container mx-auto flex flex-col items-center`}>
      <motion.div
        ref={myRef}
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.25 }}
        className={`text-xl text-white font-light text-center ${isHomePage ? 'mt-[300px] sm:mt-[420px]' : 'mt-[100px] sm:mt-[150px]'}`}
      >
        <p className="text-[54px] mt-5 font-bold">{title}</p>
        <p className="text-xl mt-5 text-white/80">{subtitle}</p>
      </motion.div>
    </section>
  );
};

export default TourHero;
