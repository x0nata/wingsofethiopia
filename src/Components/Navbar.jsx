import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import MobileDrawer from "./MobileDrawer";

const Navbar = ({ onMobileMenuOpen }) => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const handleSelection = () => {
    setDropdownOpen(false);
    setToggle(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the top of the page
      if (currentScrollY === 0) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    document.body.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LinkClass = ({ isActive }) =>
    isActive
      ? "font-medium text-base text-Orange"
      : "hover:text-Orange ease-in-out duration-300 font-medium text-base text-white";

  return (
    <motion.section
      ref={navRef}
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`p-5 pt-8 bg-Black lg:bg-Black/80 backdrop-blur-sm w-full z-[100] fixed top-0 left-0 right-0 transition-all duration-300 sm:p-5 sm:pt-8 p-3 pt-4`}
    >
      <div className={`max-w-7xl mx-auto flex flex-row justify-between items-center`}>
        <div className="z-50">
          <NavLink to="/" className="hover:text-Orange transition-colors duration-300">
            <p className="text-white font-bold text-2xl sm:text-3xl text-xl">{t.agencyTitle}</p>
            <span className="block text-Orange text-sm sm:text-base text-xs font-semibold">
              {t.travelAgency}
            </span>
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-row justify-between gap-12">
          <NavLink className={LinkClass} to="/">
            {t.home}
          </NavLink>
          {/* <NavLink className={LinkClass} to="/About">
            О нас
          </NavLink> */}

          <div className="flex items-center justify-between gap-2 relative">
            <NavLink className={LinkClass} to="/Destination">
              {t.tours}
            </NavLink>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
            >
              {dropdownOpen ? (
                <IoIosArrowUp
                  className="text-white font-bold cursor-pointer"
                  size={16}
                />
              ) : (
                <IoIosArrowDown
                  className="text-white font-bold cursor-pointer"
                  size={16}
                />
              )}
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[100%] left-0 w-64 bg-Black/95 backdrop-blur-sm text-white shadow-xl rounded-lg overflow-hidden z-50 mt-2"
              >
                <NavLink
                  onClick={handleSelection}
                  to="/AddisIT"
                  className="block px-6 py-3 hover:bg-Orange/10 hover:text-Orange transition-colors duration-200"
                >
                  {t.addisRoute}
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Addis1"
                  className="block px-6 py-3 hover:bg-Orange/10 hover:text-Orange transition-colors duration-200"
                >
                  {t.entoto}
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Addis"
                  className="block px-6 py-3 hover:bg-Orange/10 hover:text-Orange transition-colors duration-200"
                >
                  {t.addisDayRoute}
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Axum"
                  className="block px-6 py-3 hover:bg-Orange/10 hover:text-Orange transition-colors duration-200"
                >
                  {t.ancientAxum}
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/ArbaMinch"
                  className="block px-6 py-3 hover:bg-Orange/10 hover:text-Orange transition-colors duration-200"
                >
                  {t.arbaMinch}
                </NavLink>
              </motion.div>
            )}
          </div>

          <div className="flex items-center gap-4">
           
            <NavLink className={LinkClass} to="/Contact" onClick={handleSelection}>
              {t.contact}
            </NavLink>
           
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white hover:text-Orange transition-colors duration-300"
            >
              {language === 'ru' ? 'EN' : 'RU'}
            </button>
         </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <button
            className="text-Orange text-2xl "
            onClick={() => {
              console.log("Hamburger clicked");
              onMobileMenuOpen();
            }}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Navbar;
