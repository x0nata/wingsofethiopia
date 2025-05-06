/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Description = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section className="container mx-auto p-5 mt-[5px] sm:mt-10 xl:mt-10 relative">
      <div className="flex flex-col-reverse lg:flex lg:flex-row items-center lg:space-x-24 relative">
        {/* Grid Section */}
        <motion.div
          ref={myRef}
          className="mt-6 lg:mt-0 w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-8 relative"
          initial="hidden"
          animate={mainControls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="bg-Color1">
            <h1 className="text-white text-xl p-6 font-semibold">{t.activities}</h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              {t.activitiesDescription}
            </p>
          </div>
          <div className="bg-Color2">
            <h1 className="text-white text-xl p-6 font-semibold">
              {t.travelArrangements}
            </h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              {t.travelArrangementsDescription}
            </p>
          </div>
          <div className="bg-Color3">
            <h1 className="text-white text-xl p-6 font-semibold">
              {t.privateGuide}
            </h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              {t.privateGuideDescription}
            </p>
          </div>
          <div className="bg-Color4">
            <h1 className="text-white text-xl p-6 font-semibold">
              {t.locationManager}
            </h1>
            <p className="text-Text1 text-lg px-6 h-[250px]">
              {t.locationManagerDescription}
            </p>
          </div>
        </motion.div>

        {/* Desc Section */}
        <motion.div
          ref={myRef}
          className="w-full lg:w-[50%] relative"
          initial="hidden"
          animate={mainControls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div>
            <p className="text-Orange lg:text-[30px] italic pt-[10px] pb-5">
              {t.welcome}
            </p>
          </div>
          <div>
            <h1 className="text-[40px] font-semibold text-Black">
              {t.discoverEthiopia}
            </h1>
            <p className="py-5 text-DarkGray text-lg">
              {t.ethiopiaDescription1}
            </p>
            <p className="py-5 text-DarkGray text-lg">
              {t.ethiopiaDescription2}
            </p>
          </div>
          <div>
            <Link to="/destination">
              <button className="mt-5 px-6 py-4 border-0 bg-Orange text-white text-lg rounded-lg hover:shadow-lg duration-300 ease-in-out">
                Найти направление
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
