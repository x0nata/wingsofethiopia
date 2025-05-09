/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import Bg4 from "../assets/bg_4.jpg";
import AboutImg from "../assets/about-1.jpg";
import { FaPlay } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const About = () => {
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
    <section className="relative">
      <div className="my-16 relative">
        <img className="absolute w-full h-[35rem] object-cover" src={Bg4} />
        {/* <div className="relative flex items-center justify-center top-[250px]">
          <button className="bg-white rounded-full p-8 ">
            <FaPlay className="text-Orange w-[40px] h-[40px]" />
          </button>
        </div> */}
      </div>

      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 lg:justify-between relative">
          <div className="mx-5 z-50 mt-[350px] bg-white p-5 shadow-xl relative">
            <img className="h-[460px] lg:h-[640px] w-full object-cover" src={AboutImg} />
          </div>
          <motion.div
            ref={myRef}
            initial="hidden"
            animate={mainControls}
            variants={variants}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="z-50 lg:mt-[500px] pt-10 px-5 lg:px-0 relative"
          >
            <span className="text-[30px] text-Orange my-4 italic">{t.aboutAgency}</span>
            <h1 className="text-[30px] sm:text-[40px] font-semibold mb-5">
              {t.aboutTitle}
            </h1>
            <p className="sm:text-[18px] text-DarkGray lg:pr-5">
              {t.aboutDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/Destination" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-Orange px-5 py-3 sm:py-4 sm:px-7 text-white lg:text-lg rounded-lg hover:shadow-lg duration-300 ease-in-out whitespace-nowrap">
                  {t.bookAdventure}
                </button>
              </Link>
              <a 
                href="https://t.me/ethiopia13monthsofsun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-Orange px-5 py-3 sm:py-4 sm:px-7 text-white lg:text-lg rounded-lg hover:shadow-lg duration-300 ease-in-out whitespace-nowrap"
              >
                <FaTelegram className="text-xl" />
                <span>{t.learnMoreEthiopia}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
