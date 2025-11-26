import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaInternetExplorer,
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
  };

  return (
    <section className="mx-auto container px-4 sm:px-6 lg:px-8 py-5 sm:py-5 mt-8">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full lg:w-2/3">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">{t.address}</h3>
            <p className="text-DarkGray text-lg leading-relaxed">
              {t.addressValue}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaPhone className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">{t.phone}</h3>
            <p className="text-DarkGray text-lg leading-relaxed">
              +251963397419
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaPaperPlane className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">{t.email}</h3>
            <p className="text-DarkGray text-lg leading-relaxed">
              info@solasttravel.com
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaInternetExplorer className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">{t.website}</h3>
            <p className="text-DarkGray text-lg leading-relaxed">
              wingsofethiopia.com
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-Orange to-amber-500 rounded-xl shadow-xl p-8 w-full lg:w-1/3 hover:shadow-2xl transition-all duration-300"
        >
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{t.telegram}</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              {t.contactSubtitle}
            </p>
            <a 
              href="https://t.me/elenahailu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-Orange text-lg rounded-lg shadow-lg px-8 py-4 hover:bg-opacity-90 transition-all duration-300 font-semibold"
            >
              <FaTelegram className="text-xl" />
              <span>{t.telegramButton}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
