import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const ContactHero = () => {
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
    <section className="min-h-[60vh] container mx-auto flex flex-col items-center relative mb-48">
      <motion.div
        ref={myRef}
        initial="hidden"
        animate={mainControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="text-center z-[2] mt-[200px] sm:mt-[250px]"
      >
        <div className="flex items-center justify-center space-x-4 text-white/80 text-lg mb-6">
          <Link
            to="/"
            className="hover:text-Orange transition-colors duration-300"
          >
            Главная страница
          </Link>
          <span className="text-Orange">/</span>
          <span className="text-Orange">Контакты</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Свяжитесь с нами
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-16">
          Готовы начать свое путешествие в Эфиопию? Свяжитесь с нами, и мы поможем сделать ваше приключение незабываемым
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
