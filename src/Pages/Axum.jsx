/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import Navbar from "../Components/Navbar";
import TourHero from "../Components/TourHero";
import Footer from "../Components/Footer";
import { FaTelegram } from "react-icons/fa";

const Axum = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      id: 1,
      imageUrl: new URL('../assets/i3.jpg', import.meta.url).href,
    },
    {
      id: 2,
      imageUrl: new URL('../assets/i10.jpg', import.meta.url).href,
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
      }, 3000); // Change slide every 3 seconds
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

  const handleNext = () => {
    goToNext();
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="sec2">
      <Navbar />
      <TourHero />
      <div className="container mx-auto rounded-xl shadow-md py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-Black text-4xl md:text-5xl font-bold text-center pb-8 bg-gradient-to-r from-Orange to-amber-500 bg-clip-text text-transparent">
          Древний Аксум
          <span className="block text-2xl md:text-3xl mt-2 text-gray-600 font-normal">
            3 дня, 2 ночи, перелет внутренними рейсами Эфиопских авиалиний
          </span>
        </h1>

        {/* Image Section with enhanced styling */}
        <div
          className="relative w-full h-screen max-h-[800px] overflow-hidden rounded-2xl shadow-2xl mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides */}
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
                  alt=""
                  className="w-full h-full object-cover"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Only show on hover */}
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
                onClick={handleNext}
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

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
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

        {/* Description Section with enhanced styling */}
        <div className="sm:mt-12 p-5 space-y-8">
          <div className="bg-gradient-to-r from-white to-orange-50 rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-Orange mb-4">Колыбель христианства</h2>
            <p className="sm:text-lg text-gray-800 leading-relaxed">
              Именно отсюда пошло христианство в Эфиопии
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-Orange mb-4">Исторические достопримечательности</h2>
            <p className="sm:text-lg text-gray-800 leading-relaxed">
              Экскурсии – Обелиски "Поле стел" (5 века до н. э. – 4 века н.
              э). Самый большой упавший обелиск является одним из крупнейших
              цельных кусков камня, когда-либо воздвигнутых людьми! Гробницы
              доаксумских и Аксумских царей, купальня царицы Савской, руины замка
              Донгур, музей Аксума, монастырь Аббы Панталеона, церковь Св. Марии
              Сионской где находится Ковчег Завета. Все эти объекты являются
              Всемирным Наследием ЮНЕСКО
            </p>
          </div>

          <div className="bg-gradient-to-r from-white to-orange-50 rounded-xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-bold text-Orange mb-4">Древний храм</h2>
            <p className="sm:text-lg text-gray-800 leading-relaxed">
              Посещение руин дохристианского храма Йеха (8 век до н. э)
            </p>
          </div>
        </div>

        {/* Price Section with enhanced styling */}
        <div className="px-7 sm:px-10 py-10">
          <div className="bg-gradient-to-r from-Orange to-amber-500 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold">Цена:</span>
                <span className="text-3xl font-bold">125 USD</span>
                <span className="text-lg">per person</span>
              </div>
              <a 
                href="https://t.me/elenahailu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-Orange px-6 py-3 text-lg rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
              >
                <FaTelegram className="text-xl" />
                <span>Поговорите с нашим агентом по бронированию</span>
              </a>
            </div>
            <div className="mt-8 space-y-4">
              <p className="opacity-90 text-lg">
                В стоимость включена гостиница с завтраком, услуги русскоговорящего
                гида, микроавтобус, входные билеты
              </p>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-lg">
                  Билет Аддис Абеба – Аксум – Аддис Абеба оплачивается отдельно:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>~250 USD если прилетели в страну Эфиопскими авиалиниями</li>
                    <li>~380 USD если другой авиакомпанией</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Axum;
