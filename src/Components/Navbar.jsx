import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

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
      
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
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
      className={`container mx-auto p-5 pt-8 bg-Black lg:bg-Black/80 backdrop-blur-sm w-full z-[100] fixed top-0 left-0 right-0`}
    >
      <div className={` flex flex-row justify-between items-center`}>
        <div className="">
          <NavLink to="/" className="hover:text-Orange transition-colors duration-300">
            <p className="text-white font-bold text-3xl">Крылья Эфиопии</p>
            <span className="block text-Orange text-base font-semibold">
              Агентство путешествий
            </span>
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-row justify-between gap-12">
          <NavLink className={LinkClass} to="/">
            Главная страница
          </NavLink>
          {/* <NavLink className={LinkClass} to="/About">
            О нас
          </NavLink> */}

          <div className="flex items-center justify-between gap-2">
            <NavLink className={LinkClass} to="/Destination">
              Наши туры
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
                className="fixed top-24 transform -translate-x-[20%] w-52 bg-white text-black shadow-lg rounded-lg overflow-hidden z-50"
              >
                <NavLink
                  onClick={handleSelection}
                  to="/AddisIT"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Маршрут по Аддис
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Addis1"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Энтото
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Addis"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Однодневный маршрут по Аддис
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Axum"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Древний Аксум
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/ArbaMinch"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Арба Минч
                </NavLink>
              </motion.div>
            )}
          </div>

          <NavLink className={LinkClass} to="/Contact">
            Контакты
          </NavLink>
        </div>

        {/* Mobile Navigation */}

        <div className="lg:hidden">
          <button
            className="text-Orange text-2xl "
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`${
              toggle ? "block" : "hidden"
            } z-40 fixed top-28 w-full left-0 bg-Black`}
          >
            <div className="flex flex-col mx-5 py-6 space-y-4 text-base text-white">
              <NavLink className={LinkClass} to="/">
                Главная страница
              </NavLink>
              {/* <NavLink className={LinkClass} to="/About">
                О нас
              </NavLink> */}

              <div className="flex items-center gap-2">
                <NavLink className={LinkClass} to="/Destination">
                  Наши туры
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
                    className="fixed top-24 transform -translate-x-[20%] w-52 bg-white text-black shadow-lg rounded-lg overflow-hidden z-50"
                  >
                    <NavLink
                      onClick={handleSelection}
                      to="/AddisIT"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Маршрут по Аддис
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/Addis1"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Энтото
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/Addis"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Однодневный маршрут по Аддис
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/Axum"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Древний Аксум
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/ArbaMinch"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Арба Минч
                    </NavLink>
                  </motion.div>
                )}
              </div>

              <NavLink className={LinkClass} to="/Contact">
                Контакты
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Navbar;
