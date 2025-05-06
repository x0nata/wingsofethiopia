import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DrawerContent = ({ onClose }) => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <button
        className="absolute top-5 left-5 text-Orange text-2xl z-50"
        onClick={onClose}
      >
        <FaTimes />
      </button>
      <button
        className="absolute top-5 right-5 text-white bg-Orange px-3 py-1 rounded z-50"
        onClick={toggleLanguage}
      >
        {language === 'ru' ? 'EN' : 'RU'}
      </button>
      <div className="flex flex-col px-6 pt-20 pb-8 space-y-4 text-lg text-white">
        <NavLink className="mb-2" to="/" onClick={onClose}>
          {t.home}
        </NavLink>
        <div>
          <button
            className="flex items-center w-full justify-between py-2 focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>{t.tours}</span>
            {dropdownOpen ? (
              <IoIosArrowUp className="text-white font-bold cursor-pointer" size={18} />
            ) : (
              <IoIosArrowDown className="text-white font-bold cursor-pointer" size={18} />
            )}
          </button>
          {dropdownOpen && (
            <div className="flex flex-col pl-4 mt-1 space-y-1 border-l border-gray-700">
              <NavLink onClick={onClose} to="/AddisIT" className="block py-2 hover:text-Orange transition-colors duration-200">{t.addisRoute}</NavLink>
              <NavLink onClick={onClose} to="/Addis1" className="block py-2 hover:text-Orange transition-colors duration-200">{t.entoto}</NavLink>
              <NavLink onClick={onClose} to="/Addis" className="block py-2 hover:text-Orange transition-colors duration-200">{t.addisDayRoute}</NavLink>
              <NavLink onClick={onClose} to="/Axum" className="block py-2 hover:text-Orange transition-colors duration-200">{t.ancientAxum}</NavLink>
              <NavLink onClick={onClose} to="/ArbaMinch" className="block py-2 hover:text-Orange transition-colors duration-200">{t.arbaMinch}</NavLink>
            </div>
          )}
        </div>
        <NavLink to="/Contact" onClick={onClose}>
          {t.contact}
        </NavLink>
      </div>
    </>
  );
};

export default DrawerContent; 