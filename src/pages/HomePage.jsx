import React, { useEffect } from "react";
import myImage from "/images/me.jpg";

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

  const professionItems = [
    { icon: "bx-code-alt", text: "Suka ngoding" },
    { icon: "bx-camera", text: "Suka senja" },
    { icon: "bx-palette", text: "Suka design" },
    { icon: "bx-video-recording", text: "Editor" },
  ];

  return (
    <section
      id="home-section"
      className="home relative flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-[0%] py-24 sm:py-32 md:py-40 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full z-10 gap-8 md:gap-16">
        <div className="ml-0 md:ml-[120px] home-content text-center md:text-left md:w-1/2 lg:w-2/5">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-text-color">
            Hi, I'm
          </h3>
          <h1 className="xs:text-4xl text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-text-color">
            Bram Ahimsa Lafayet
          </h1>
          <p className="text-base sm:text-3xl mb-4 text-text-color">
            I'm currently dedicating most of my time to web
            development—building, refining, and experimenting with personal
            projects. On slower days, you'll probably find me recharging with a
            quick walk to the local store or catching up on design inspiration.
          </p>
          <p className="text-base sm:text-2xl mb-8 text-text-color">
            Outside of coding, my routine is simple: eat, rest, reflect, and
            stay curious. Whether I'm diving into new tech stacks or sketching
            UI ideas, I try to stay consistent and keep growing as a developer.
          </p>

          <div className="social-media flex justify-center md:justify-start space-x-4 mb-10">
            <a
              href="https://github.com/bramahimm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md"
              aria-label="GitHub">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/bramahimsa28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md"
              aria-label="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="mailto:bramahimm@example.com"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md"
              aria-label="Email">
              <i className="bx bxl-gmail"></i>
            </a>
          </div>

          <a
            href="/path/to/your/cv.pdf"
            download
            className="btn inline-block px-8 py-3 bg-main-color rounded-lg text-white-color text-lg font-semibold border-2 border-main-color transition-all duration-500 hover:bg-transparent hover:text-main-color">
            Donlot CV
          </a>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-screen h-screen overflow-hidden pointer-events-none z-0 hidden lg:block">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-screen h-screen overflow-hidden pointer-events-none z-0 hidden lg:block">
            {/* BOX UTAMA BERPUTAR */}
            <div className="profession-box relative">
              {professionItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-bg-color profession text-center"
                  style={{ "--i": index }}>
                  <i className={`bx ${item.icon} text-[3.8rem] mb-2`}></i>
                  <h3 className="text-[3.2rem] font-semibold leading-none">
                    {item.text}
                  </h3>
                </div>
              ))}

              {/* LINGKARAN */}
              <div className="circle"></div>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-screen h-screen overflow-hidden pointer-events-none z-0 hidden lg:block">
              {/* OVERLAY PINK */}
              <div
                className="absolute top-0 right-0 xl:right-[-6%] w-0 h-0 z-[-2]"
                style={{
                  borderTop: "50vh solid var(--main-color)",
                  borderRight: "384px solid var(--main-color)",
                  borderBottom: "50vh solid var(--main-color)",
                  borderLeft: "384px solid transparent",
                }}></div>

              {/* IMAGE PROFILE */}
              <div className="absolute top-1/2 right-[1%] -translate-y-1/2 z-20 hidden lg:flex justify-end items-center">
                <img
                  src={myImage}
                  alt="Bram Ahimsa"
                  className="w-[220px] sm:w-[300px] lg:w-[360px] xl:w-[350px] h-auto rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
