/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Tour from "./Tour";
import { FaMapMarkerAlt, FaBed, FaMountain, FaBath } from "react-icons/fa";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const TourMain = () => {
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
    <section className="mx-auto container p-5 mt-16">
      <motion.div
        ref={myRef}
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-24 "
      >
        <Link to="/AddisIT">
          <Tour
            span={t.addisTour.price}
            days={t.addisTour.days}
            place={t.addisTour.title}
            icon1={<FaMapMarkerAlt />}
            location={t.addisTour.location}
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Historical Site"
          />
        </Link>
        <Link to="/Addis1">
          <Tour
            span={t.entotoTour.price}
            days={t.entotoTour.days}
            place={t.entotoTour.title}
            icon1={<FaMapMarkerAlt />}
            location={t.entotoTour.location}
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Mountain Trekking"
          />
        </Link>
        <Link to="/Addis">
          <Tour
            span={t.addisDayTour.price}
            days={t.addisDayTour.days}
            place={t.addisDayTour.title}
            icon1={<FaMapMarkerAlt />}
            location={t.addisDayTour.location}
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Historical Site"
          />
        </Link>
        <Link to="/Axum">
          <Tour
            span={t.axumTour.price}
            days={t.axumTour.days}
            place={t.axumTour.title}
            icon1={<FaMapMarkerAlt />}
            location={t.axumTour.location}
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Cultural Tour"
          />
        </Link>
        <Link to="/ArbaMinch">
          <Tour
            span={t.arbaMinchTour.price}
            days={t.arbaMinchTour.days}
            place={t.arbaMinchTour.title}
            icon1={<FaMapMarkerAlt />}
            location={t.arbaMinchTour.location}
            // icon2={<FaBath />}
            // no1="2"
            // icon3={<FaBed />}
            // no2="3"
            // icon4={<FaMountain />}
            // desc="Cultural Tour"
          />
        </Link>
      </motion.div>
      {/* 
      <div className="flex flex-row items-center gap-2 justify-center mt-16">
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          {"<"}
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          1
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          2
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          3
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          4
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          5
        </a>
        <a
          className="w-[40px] h-[40px] px-3 flex items-center justify-center border-[1px] border-gray-300 rounded-full hover:bg-black hover:text-white ease-in-out duration-300"
          href="#"
        >
          {">"}
        </a>
      </div> */}
    </section>
  );
};

export default TourMain;
