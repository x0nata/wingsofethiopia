/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
  };

  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true, margin: "-100px" });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="foot pb-10 mt-16 border-t border-t-gray-200">
      <motion.div
        ref={myRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        initial="hidden"
        animate={mainControls}
        variants={variants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {/* First Footer Section */}
          <div>
            <h1 className="text-2xl sm:text-[25px] font-bold text-gray-900">{t.aboutUs}</h1>
            <p className="mt-6 sm:mt-10 text-DarkGray text-base sm:text-lg leading-relaxed">
              {t.aboutUsText}
            </p>
            <div className="flex flex-row items-center gap-5 mt-6">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-Orange rounded-full p-3 sm:p-4 text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <a href="https://t.me/ethiopia13monthsofsun" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className="text-xl sm:text-2xl" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Second Footer Section */}
          <div className="lg:ml-10">
            <h1 className="text-2xl sm:text-[25px] font-bold text-gray-900">{t.information}</h1>
            <div className="text-DarkGray text-base sm:text-lg flex flex-col gap-4 sm:gap-7 mt-6 sm:mt-10">
              <Link to="/Contact" className="hover:text-Orange transition-colors duration-300">{t.faq}</Link>
              <Link to="/Contact" className="hover:text-Orange transition-colors duration-300">{t.bookingTerms}</Link>
              <Link to="/Contact" className="hover:text-Orange transition-colors duration-300">{t.contact}</Link>
            </div>
          </div>

          {/* Third Footer Section */}
          <div className="lg:ml-10">
            <h1 className="text-2xl sm:text-[25px] font-bold text-gray-900">{t.experience}</h1>
            <div className="text-DarkGray text-base sm:text-lg flex flex-col gap-4 sm:gap-7 mt-6 sm:mt-10">
              <Link to="/Destination" className="hover:text-Orange transition-colors duration-300">{t.hotels}</Link>
              <Link to="/Destination" className="hover:text-Orange transition-colors duration-300">{t.landmarks}</Link>
              <Link to="/Destination" className="hover:text-Orange transition-colors duration-300">{t.nature}</Link>
              <Link to="/Destination" className="hover:text-Orange transition-colors duration-300">{t.culturalTours}</Link>
            </div>
          </div>

          {/* Fourth Footer Section */}
          <div className="lg:ml-10">
            <h1 className="text-2xl sm:text-[25px] font-bold text-gray-900">{t.questions}</h1>
            <div className="text-DarkGray text-base sm:text-lg flex flex-col gap-4 sm:gap-7 mt-6 sm:mt-10">
              <div className="flex flex-row items-center group">
                <FaMapMarkerAlt className="text-Orange text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                <p className="ml-4 group-hover:text-Orange transition-colors duration-300">{t.addressValue}</p>
              </div>
              <div className="flex flex-row items-center group">
                <FaPhone className="text-Orange text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                <p className="ml-4 group-hover:text-Orange transition-colors duration-300">+251994717954</p>
              </div>
              <div className="flex flex-row items-center group">
                <FaPaperPlane className="text-Orange text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300" />
                <a href="https://t.me/elenahailu" className="ml-4 group-hover:text-Orange transition-colors duration-300">telegram</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
