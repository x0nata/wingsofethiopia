import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaInternetExplorer,
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactForm = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mx-auto container p-5 mt-64">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">Адрес</h3>
            <p className="text-DarkGray text-lg">
              Аддис-Абеба, Эфиопия
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaPhone className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">Телефон</h3>
            <p className="text-DarkGray text-lg">
              +251994717954
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaPaperPlane className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">Email</h3>
            <p className="text-DarkGray text-lg">
              info@solasttravel.com
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-Orange/10 text-Orange w-16 h-16 flex justify-center items-center rounded-full mb-6">
              <FaInternetExplorer className="text-2xl" />
            </div>
            <h3 className="text-Orange text-xl font-bold mb-3">Веб-сайт</h3>
            <p className="text-DarkGray text-lg">
              wingsofethiopia.com
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-Orange to-amber-500 rounded-xl shadow-xl p-8 w-full lg:w-1/3"
        >
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Свяжитесь через Telegram</h2>
            <p className="text-white/90 text-lg mb-8">
              Нажмите на кнопку ниже, чтобы связаться с нами через Telegram
            </p>
            <a 
              href="https://t.me/elenahailu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-Orange text-lg rounded-lg shadow-lg px-8 py-4 hover:bg-opacity-90 transition-all duration-300 font-semibold"
            >
              <FaTelegram className="text-xl" />
              <span>Открыть Telegram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
