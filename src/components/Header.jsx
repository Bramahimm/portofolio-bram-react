import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");
  const [isSticky, setIsSticky] = useState(false);

  // Efek untuk memuat preferensi dark mode dari localStorage saat komponen di-mount
  useEffect(() => {
    const savedMode = localStorage.getItem("dark-mode"); // Menggunakan "dark-mode" sesuai CSS
    if (savedMode === "enabled") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark-mode"); // Gunakan "dark-mode"
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark-mode"); // Gunakan "dark-mode"
    }
  }, []); // Hanya berjalan sekali saat mount

  // Efek untuk Sticky Header dan menutup menu saat scroll
  useEffect(() => {
    const handleScroll = () => {
      // Logika Sticky Header
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Logika untuk menutup menu mobile saat scroll jika sedang terbuka
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function: hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]); // isMenuOpen sebagai dependensi agar handleScroll selalu melihat nilai terbaru

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  };

  // Fungsi untuk toggle menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Daftar item navigasi
  const navItems = [
    { id: "home-section", label: "Home" },
    { id: "about-section", label: "About" },
    { id: "services-section", label: "Services" },
    { id: "projects-section", label: "Projects" },
    { id: "contact-section", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50
                  transition-colors duration-300 dark:bg-black-color dark:shadow-shadow-color
                  ${isSticky ? 'bg-white-color/90 backdrop-blur-sm shadow-md' : 'bg-bg-color shadow-none'}`}
    >
      <ScrollLink
        to="home-section"
        smooth={true}
        duration={500}
        className="text-2xl font-bold cursor-pointer text-text-color hover:text-main-color transition-colors duration-300"
        onClick={() => setIsMenuOpen(false)}
      >
        BramahimmCode
      </ScrollLink>

      <div
        className="text-3xl cursor-pointer md:hidden text-text-color hover:text-main-color"
        id="menu-icon"
        onClick={toggleMenu}
      >
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>{" "}
      </div>

      <nav
        className={`navbar ${isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8
                    absolute md:static top-full left-0 w-full md:w-auto
                    bg-white-color dark:bg-black-color shadow-lg md:shadow-none
                    flex flex-col md:flex-row items-center transition-all duration-300 ease-in-out z-40`}
        style={{
          maxHeight: isMenuOpen ? "300px" : "0", 
          overflow: "hidden",
        }}
      >
        {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-70} 
            className={`block py-3 px-4 text-lg font-semibold text-text-color hover:text-main-color transition-colors duration-300
                        ${activeSection === item.id ? "active-link-tailwind" : ""
            }
                        cursor-pointer w-full text-center md:w-auto md:text-left`}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection(item.id);
            }}
            onSetActive={(to) => setActiveSection(to)}
            spy={true}
          >
            {item.label}
          </ScrollLink>
        ))}
      </nav>

      <div
        className="text-3xl cursor-pointer text-text-color hover:text-main-color"
        id="darkMode-icon"
        onClick={toggleDarkMode}
      >
        <i className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"}`}></i>
      </div>
    </header>
  );
}

export default Header;