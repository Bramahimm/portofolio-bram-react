import React, { useEffect } from "react";
import OrbitSection from "../components/OrbitSection.jsx";
function HomePage() {
  useEffect(() => {
    if (typeof window.ScrollReveal !== "undefined") {
      window.ScrollReveal().reveal(".home-content", {
        origin: "top",
        distance: "80px",
        duration: 2000,
        delay: 200,
      });
      window
        .ScrollReveal()
        .reveal(
          ".home-img img, .services-container, .project-box, .testimonial-wrapper, .contact form",
          { origin: "bottom", distance: "80px", duration: 2000, delay: 200 }
        );
      window.ScrollReveal().reveal(".home-content h1, .about-img img", {
        origin: "left",
        distance: "80px",
        duration: 2000,
        delay: 200,
      });
      window
        .ScrollReveal()
        .reveal(".home-content h3, .home-content p, .about-content", {
          origin: "right",
          distance: "80px",
          duration: 2000,
          delay: 200,
        });
    }
  }, []);

  return (
    <section
      id="home-section"
      className="home relative flex flex-col md:flex-row items-center justify-start md:justify-between min-h-screen px-4 sm:px-[0%] pt-52 pb-60 sm:py-40 md:py-48 overflow-hidden text-center md:text-left">
      <div className="z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Konten Kiri */}
        <div className="home-content md:w-1/2 lg:w-2/5 md:pl-10 lg:pl-60">
          <h3 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-2 text-text-color">
            Hi, I'm
          </h3>
          <h1 className="text-7xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-text-color">
            Bram Ahimsa Lafayet
          </h1>
          <p className="text-2xl sm:text-3xl mb-4 text-text-color">
            I'm currently dedicating most of my time to web
            development—building, refining, and experimenting...
          </p>
          <p className="text-2xl sm:text-2xl mb-8 text-text-color">
            Outside of coding, my routine is simple: eat, rest, reflect, and
            stay curious...
          </p>

          {/* Sosial Media */}
          <div className="social-media flex justify-center md:justify-start space-x-4 mb-10">
            <a
              href="https://github.com/bramahimm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/bramahimsa28"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="mailto:bramahimm@example.com"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md">
              <i className="bx bxl-gmail"></i>
            </a>
          </div>

          {/* Tombol CV */}
          <a
            href="/path/to/your/cv.pdf"
            download
            className="btn inline-block px-8 py-3 bg-main-color rounded-lg text-white-color text-lg font-semibold border-2 border-main-color transition-all duration-500 hover:bg-transparent hover:text-main-color">
            Download CV
          </a>
        </div>
        <OrbitSection />
      </div>
    </section>
  );
}

export default HomePage;
