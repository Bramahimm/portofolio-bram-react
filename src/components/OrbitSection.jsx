import React from "react";
import myImage from "/images/me.jpg";

const professionItems = [
  { icon: "bx-code-alt", text: "Suka ngoding" },
  { icon: "bx-camera", text: "Suka senja" },
  { icon: "bx-palette", text: "Suka design" },
  { icon: "bx-video-recording", text: "Editor" },
];

function OrbitSection() {
  return (
    <div className="profession-container">
      {/* Rotating Box */}
      <div className="profession-box">
        {professionItems.map((item, index) => (
          <div key={index} className="profession" style={{ "--i": index }}>
            <i className={`bx ${item.icon}`}></i>
            <h3>{item.text}</h3>
          </div>
        ))}
        <div className="circle"></div>
      </div>
      {/* Overlay Trapezoid */}
      <div className="overlay"></div>

      {/* IMAGE PROFILE */}
      <div className="absolute top-1/2 right-[1%] -translate-y-1/2 z-20 hidden lg:flex justify-end items-center">
        <img
          id="img"
          src={myImage}
          alt="Bram Ahimsa"
          className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] xl:w-[350px] h-auto rounded-full"
        />
      </div>
    </div>
  );
}

export default OrbitSection;
