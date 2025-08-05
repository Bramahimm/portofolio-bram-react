// src/components/Header.jsx
import React, { useState, useEffect } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.slice(1) || "home";
      setActiveLink(currentHash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 w-full px-[7%] py-6 z-[100] backdrop-blur-sm bg-white/70 dark:bg-dark-color/80 flex items-center justify-between transition-all duration-500 border-b border-shadow-color">
      <a
        href="#home"
        className="text-[2.5rem] text-main-color font-semibold mr-auto">
        BramahimmCode
      </a>

      {/* Menu Icon (Hamburger) for Mobile */}
      <div
        className={`bx text-[3.6rem] text-text-color cursor-pointer lg:hidden ${
          isMenuOpen ? "bx-x" : "bx-menu"
        }`}
        onClick={handleMenuToggle}></div>

      {/* Navbar */}
      <nav
        className={`
        lg:flex lg:items-center lg:space-x-14
        ${isMenuOpen ? "block" : "hidden"} 
        absolute top-full left-0 w-full py-4 px-[3%] bg-white 
        border-t border-solid border-shadow-color shadow-lg 
        lg:static lg:w-auto lg:p-0 lg:border-none lg:shadow-none
        transition-all duration-300 ease-in-out lg:transition-none
      `}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`
              relative text-[1.7rem] font-medium text-text-color mx-0 lg:mx-0 lg:mr-0
              block my-8 text-[2rem] lg:my-0 lg:text-[1.7rem]
              ${
                activeLink === item.id
                  ? "text-main-color lg:text-text-color"
                  : ""
              }
              lg:hover:text-bg-color
              before:content-[''] before:absolute before:left-0 before:bottom-[-6px] before:w-0 before:h-[0.2rem] before:bg-main-color before:transition-all before:duration-300
              ${activeLink === item.id ? "lg:before:w-full" : ""}
              lg:hover:before:w-full
            `}
            onClick={() => {
              setActiveLink(item.id);
              setIsMenuOpen(false);
            }}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Dark Mode Icon */}
      <div
        className={`bx ${
          isDarkMode ? "bxs-sun" : "bx-moon"
        } text-[2.4rem] text-text-color cursor-pointer ml-8 lg:ml-20 transition-colors duration-200 hover:text-bg-color`}
        onClick={handleDarkModeToggle}></div>
    </header>
  );
}

export default Header;
