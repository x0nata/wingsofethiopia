/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import TourHero from "../Components/TourHero";
import Footer from "../Components/Footer";
import { FaTelegram } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlane, FaHotel, FaUtensils, FaTicketAlt, FaUserTie } from 'react-icons/fa';
import I3 from "../assets/I3.jpg";
import I10 from "../assets/I10.jpg";

const Axum = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.axumTour;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      imageUrl: I3,
      alt: t.slides.image1
    },
    {
      id: 2,
      imageUrl: I10,
      alt: t.slides.image2
    },
  ];

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        goToNext();
      }, 3000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentIndex, isHovered, goToNext]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="sec2">
      <TourHero />
      <div className="container mx-auto rounded-xl shadow-md py-10 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-Black text-4xl md:text-5xl font-bold text-center pb-8 bg-gradient-to-r from-Orange to-amber-500 bg-clip-text text-transparent"
        >
          {t.title}
          <span className="block text-2xl md:text-3xl mt-2 text-gray-600 font-normal">
            {t.description}
          </span>
        </motion.h1>

        {/* Image Slides */}
        <div
          className="relative w-full h-screen max-h-[800px] overflow-hidden rounded-2xl shadow-2xl mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative w-full flex-shrink-0 h-screen max-h-[800px]"
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {isHovered && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-3 rounded-full hover:bg-opacity-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === slideIndex
                    ? "bg-white w-4"
                    : "bg-gray-500 bg-opacity-50"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Historical Attractions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-Orange mb-4 uppercase tracking-wide">{t.historicalAttractions.title}</h2>
            <p className="text-DarkGray leading-relaxed text-lg">
              {language === 'ru'
                ? 'Экскурсии – Обелиски "Поле стел" (5 века до н. э. – 4 века н. э). Самый большой упавший обелиск является одним из крупнейших цельных кусков камня, когда-либо воздвигнутых людьми! Гробницы доаксумских и Аксумских царей, купальня царицы Савской, руины замка Донгур, музей Аксума, монастырь Аббы Панталеона, церковь Св. Марии Сионской где находится Ковчег Завета. Все эти объекты являются Всемирным Наследием ЮНЕСКО.'
                : 'Historical landmarks\nExcursions – Obelisks "Field of Stelae" (5th century BC – 4th century AD). The largest fallen obelisk is one of the largest single pieces of stone ever erected by humans! Tombs of the pre-Aksumite and Axumite kings, Bath of the Queen of Sheba, ruins of Dongour Castle, Axum Museum, Abba Pantaleon Monastery, Church of St. Mary of Zion where the Ark of the Covenant is located. All these sites are UNESCO World Heritage Sites.'}
            </p>
          </motion.div>

          {/* Ancient Temple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-Orange mb-4 uppercase tracking-wide">{t.ancientTemple.title}</h2>
            <p className="text-DarkGray leading-relaxed text-lg">{t.ancientTemple.description}</p>
          </motion.div>
        </div>

        {/* Price Section */}
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-Orange to-amber-500 rounded-2xl p-8 text-white shadow-xl mb-12"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">{t.price}</span>
              <span className="text-3xl font-bold">{t.priceValue}</span>
              <span className="text-lg">{t.perPerson}</span>
            </div>
            <a 
              href="https://t.me/elenahailu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-Orange px-6 py-3 text-lg rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              <FaTelegram className="text-xl" />
              <span>{t.bookNow}</span>
            </a>
          </div>
          <div className="mt-8 space-y-4">
            <p className="opacity-90 text-lg">{t.priceIncluded}</p>
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-lg">
                {t.additionalFees}
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t.ethiopianAirlines}</li>
                  <li>{t.otherAirlines}</li>
                </ul>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Itinerary */}
        
      </div>
      <Footer />
    </section>
  );
};

export default Axum;
