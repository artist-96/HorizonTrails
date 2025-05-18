"use client";

import React, { useState, useEffect, useRef } from "react";
import bgCity1 from "../../assets/city1.jpg";
import bgCity2 from "../../assets/city2.jpg";
import bgCity3 from "../../assets/city3.jpg";
import bgCity4 from "../../assets/city4.jpg";
import bgCity5 from "../../assets/city5.jpg";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  const backgroundImages = [bgCity1, bgCity2, bgCity3, bgCity4, bgCity5];

  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideIntervalRef.current);
  }, []);

  const goToPrev = () => {
    clearInterval(slideIntervalRef.current);
    setCurrentBgIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  const goToNext = () => {
    clearInterval(slideIntervalRef.current);
    setCurrentBgIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
    startAutoSlide();
  };

  return (
    <div className="relative w-screen h-[520px] overflow-hidden">
      {/* Background Sliding Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          width: `${backgroundImages.length * 100}vw`,
          transform: `translateX(-${currentBgIndex * 100}vw)`,
        }}
      >
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className="w-screen h-full bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: `url(${bg.src})` }}
          />
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full dark:bg-black/60 bg-white/80 dark:text-white duration-300 flex items-center justify-center">
        <div className="text-center space-y-5 px-4">
          <p
            className="text-primary text-3xl font-semibold uppercase drop-shadow-md"
            data-aos="fade-up"
          >
            BOOK YOUR RIDE
          </p>

          <a
            href="https://wa.me/917637838415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-green-600 rounded-full px-6 py-4 shadow-lg hover:shadow-[0_0_15px_4px_rgba(22,163,74,0.8)] transition-all duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaWhatsapp
              size={48}
              className="text-white animate-bounce"
              aria-hidden="true"
            />
            <span className="text-white text-4xl md:text-6xl font-bold select-none drop-shadow-lg">
              +91 7637838415
            </span>
          </a>

          <p
            className="tracking-[8px] text-base sm:text-xl font-semibold drop-shadow-sm"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            www.supercabs.co
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
        aria-label="Previous image"
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
        aria-label="Next image"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Hero;
