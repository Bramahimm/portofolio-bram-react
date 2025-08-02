// src/components/Footer.jsx
import React from 'react';

// Pastikan Boxicons CSS sudah diimpor di proyek Anda
// Misalnya di src/index.css:
// @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Membuat scroll menjadi halus
    });
  };

  return (
    <footer className="bg-main-color text-white-color py-8 px-[7%] flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <div className="text-base mb-4 sm:mb-0">
        <p>Copyright &copy; Bram 2025 | All Rights Reserved.</p>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={scrollToTop}
          className="inline-flex justify-center items-center p-3 rounded-md bg-white-color border-2 border-main-color outline-2 outline-transparent transition-all duration-500 hover:outline-white-color"
          aria-label="Scroll to top"
        >
          <i className='bx bx-up-arrow-alt text-black-color'></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;