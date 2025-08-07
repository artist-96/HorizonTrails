"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Lottie from "lottie-react";
import { FaWhatsapp } from "react-icons/fa";
import carDrive from "../../lotties/car-drive.json";

const TravelHero = () => {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const checkpoints = [
    { label: "Book", quote: "Plan your perfect ride" },
    { label: "Ride", quote: "Enjoy safe & smooth travel" },
    { label: "Explore", quote: "Discover new destinations" },
    { label: "Repeat", quote: "Keep coming back!" },
  ];

  // Checkpoint updater
  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const percentage = (latestX / width) * 100;

      if (percentage < 25) setCurrentCheckpoint(0);
      else if (percentage < 50) setCurrentCheckpoint(1);
      else if (percentage < 75) setCurrentCheckpoint(2);
      else setCurrentCheckpoint(3);
    });

    return () => unsubscribe();
  }, [x]);

  const cloudStyles = [
    { top: "top-10", left: "left-10", width: "w-20", dir: 1, duration: 20 },
    { top: "top-20", left: "left-30", width: "w-28", dir: -1, duration: 22 },
    { top: "top-20", left: "right-8", width: "w-12", dir: -1, duration: 18 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[90vh] overflow-hidden flex justify-center items-center bg-gradient-to-b from-orange-100 to-blue-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
    >
      {/* Title + subtitle */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          Horizon Trails
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-2">
          {checkpoints[currentCheckpoint].label}
        </p>
      </div>

      {/* Floating clouds */}
      {cloudStyles.map((cloud, idx) => (
        <motion.img
          key={idx}
          src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
          alt="Cloud"
          className={`absolute ${cloud.top} ${cloud.left} ${cloud.width} opacity-60`}
          animate={{ x: [0, 100 * cloud.dir, 0] }}
          transition={{ duration: cloud.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Airplane */}
      <motion.img
        src="/airplane.png"
        alt="Flying Airplane"
        className="absolute top-10 left-[-120px] w-20 z-1"
        animate={{ x: ["-120px", "100vw"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Balloon */}
      <motion.img
        src="/ballon.png"
        alt="Hot Air Balloon"
        className="absolute bottom-80 left-12 w-48 z-1"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* CTA Heading */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        className="absolute top-[5%] left-0 w-full flex flex-col items-center text-center z-0 px-4"
      >
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide text-black px-6 py-2 rounded-xl"
          style={{
            textShadow:
              "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
          }}
        >
          Your Next <span className="text-red-500">Adventure</span> Awaits!
        </motion.h1>
        <motion.p
          className="hidden md:block text-sm sm:text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-4 max-w-[70%] lg:max-w-[50%] leading-relaxed"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Unleash bold journeys. Embrace colors. Feel the freedom.
        </motion.p>
        <motion.a
          href="https://wa.me/918822016566"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="bg-green-500 text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-lg z-0 cursor-pointer"
        >
          <FaWhatsapp className="text-xl" />
          <span className="font-semibold text-sm sm:text-base">Chat on WhatsApp</span>
        </motion.a>
      </motion.div>

      {/* Road */}
      <div className="absolute bottom-0 w-full h-44 bg-black z-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-[10px] bottom-[90px]"
          style={{
            backgroundImage: "repeating-linear-gradient(to right, white 0 80px, transparent 80px 120px)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "120px 100%",
          }}
          animate={{ backgroundPositionX: ["0px", "-120px"] }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
        />
      </div>

      {/* Car Lottie */}
      <motion.div
        className="absolute z-10 w-[140px] sm:w-[200px] md:w-[280px] lg:w-[360px] touch-none drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)]"
        style={{ x, bottom: "78px" }}
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.2}
      >
        <Lottie animationData={carDrive} loop autoplay />
      </motion.div>

      {/* Checkpoint dots and tooltips */}
      {checkpoints.map((cp, idx) => {
        const leftPercent = 10 + idx * 25;
        return (
          <div key={idx}>
            <div
              className={`absolute w-4 sm:w-5 h-4 sm:h-5 rounded-full border-white border-2 z-0 transition-transform duration-500 ${idx === currentCheckpoint ? "bg-green-500 scale-125" : "bg-red-500"
                }`}
              style={{ left: `${leftPercent}%`, bottom: "240px" }}
            />
            {idx === currentCheckpoint && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.4, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="absolute z-0"
                  style={{ left: `calc(${leftPercent}% - 8px)`, bottom: "255px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    style={{ fill: "red" }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z" />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                  className="absolute text-xs sm:text-sm md:text-base italic font-bold text-black text-center py-2 bg-white/90 rounded-md shadow z-0"
                  style={{
                    left: `calc(${leftPercent}% - 90px)`,
                    bottom: "300px",
                    width: "180px",
                    whiteSpace: "nowrap",
                  }}
                >
                  “{cp.quote}”
                </motion.div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TravelHero;
