import React, { useEffect } from 'react';
import myImage from '/images/me.jpg';

function HomePage() {
  useEffect(() => {
    if (typeof window.ScrollReveal !== 'undefined') {
      window.ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
      window.ScrollReveal().reveal('.home-img img, .services-container, .project-box, .testimonial-wrapper, .contact form', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
      window.ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
      window.ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });
    }
  }, []);

  const professionItems = [
    { icon: 'bx-code-alt', text: 'Suka ngoding' },
    { icon: 'bx-camera', text: 'Suka senja' },
    { icon: 'bx-palette', text: 'Suka design' },
    { icon: 'bx-video-recording', text: 'Editor' },
  ];

  return (
    <section
      id="home-section"
      className="home relative flex items-center min-h-screen px-7% py-24 sm:py-32 md:py-40 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full z-10 gap-8 md:gap-16">
        <div className="home-content text-center md:text-left md:w-1/2 lg:w-2/5">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-text-color">Hello, Gua</h3>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-text-color">Bram Ahimsa</h1>
          <p className="text-base sm:text-lg mb-4 text-text-color">
            kegiatan saya saat ini adalah tidur, bangun, ngoding, repeat (kalo lagi malas ya ke indomaret beli golda)
          </p>
          <p className="text-base sm:text-lg mb-8 text-text-color">
            keseharian saya hanya tidur, makan, minum, mengasap dan skrol tiktod.
          </p>

          <div className="social-media flex justify-center md:justify-start space-x-4 mb-10">
            <a
              href="https://github.com/bramahimm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md"
              aria-label="GitHub"
            >
              <i className='bx bxl-github'></i>
            </a>
            <a
              href="https://linkedin.com/in/bramahimsa28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md"
              aria-label="LinkedIn"
            >
              <i className='bx bxl-linkedin'></i>
            </a>
            <a
              href="mailto:bramahimm@example.com"
              className="inline-flex justify-center items-center w-12 h-12 bg-main-color border-2 border-main-color rounded-full text-white text-2xl hover:bg-transparent hover:text-main-color transition-all duration-300 shadow-md"
              aria-label="Email"
            >
              <i className='bx bxl-gmail'></i>
            </a>
          </div>

          <a
            href="/path/to/your/cv.pdf"
            download
            className="btn inline-block px-8 py-3 bg-main-color rounded-lg text-white-color text-lg font-semibold border-2 border-main-color transition-all duration-500 hover:bg-transparent hover:text-main-color"
          >
            Donlot CV
          </a>
        </div>

        <div className="profession-container absolute top-1/2 right-0 -translate-y-1/2 w-screen h-screen overflow-hidden pointer-events-none z-0">
          <div className="profession-box absolute top-0 right-0 w-[768px] h-full flex justify-center items-center animate-profession-animate">
            {professionItems.map((item, index) => (
              <div
                key={index}
                className="profession flex items-center gap-2 flex-col text-main-color bg-bg-color p-3 text-center"
                style={{ '--i': index + 1 }}
              >
                <i className={`bx ${item.icon} text-[3.8rem]`}></i>
                <h3 className="text-[3.2rem] leading-none font-semibold">{item.text}</h3>
              </div>
            ))}
            <div className="circle absolute w-[560px] h-[560px] rounded-full border-[3px] border-main-color border-b-main-color border-l-main-color border-r-main-color border-t-transparent z-[-1]"></div>
          </div>
          <div
            className="overlay absolute top-0 right-0 w-0 h-0 z-[-1]"
            style={{
              borderTop: '50vh solid var(--main-color)',
              borderRight: '384px solid var(--main-color)',
              borderBottom: '50vh solid var(--main-color)',
              borderLeft: '384px solid transparent',
            }}
          ></div>
        </div>

        <div className="home-img absolute bottom-0 right-[40px] pointer-events-none z-[1]">
          <img src={myImage} alt="Bram Ahimsa" className="max-w-[480px] max-h-screen rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
