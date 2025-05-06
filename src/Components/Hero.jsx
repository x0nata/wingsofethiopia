import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import bgImage from "../assets/bg_5.jpg";
// import { FaPlay } from "react-icons/fa";

const Hero = () => {
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

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      ref={myRef}
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      ></div>
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24 lg:py-36 flex flex-col items-start relative z-10 max-w-4xl">
        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={variants}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <p className="text-Orange text-xl lg:text-3xl italic mb-6 font-medium">
            {t.heroWelcome}
          </p>
          <h1 className="text-white text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-white text-lg lg:text-xl font-light mb-10 max-w-2xl">
            {t.heroDescription}
          </p>
          <a
            href="#contact"
            className="inline-block bg-Orange text-white font-semibold px-10 py-4 rounded-full text-xl hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {t.heroButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
