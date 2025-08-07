"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Lottie from "lottie-react";
import { FaWhatsapp } from "react-icons/fa";
import carDrive from "../../lotties/car-drive.json";

const TravelHero = () => {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const x = useMotionValue(0);
  const pointerX = useMotionValue(0);

  const [checkpoints] = useState([
    { leftPercent: 10, quote: "Tread thee forth" },
    { leftPercent: 30, quote: "Seek new skies" },
    { leftPercent: 50, quote: "Adventure calls" },
    { leftPercent: 70, quote: "Come, Lets ride" },
    { leftPercent: 90, quote: "Fate shall us guide" },
  ]);

  const carWidth = 140;

  useEffect(() => {
    if (isDragging.current) return;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const left = (checkpoints[currentCheckpoint].leftPercent / 100) * containerWidth - carWidth / 2;
    animate(x, left, {
      type: "spring",
      stiffness: 120,
      damping: 14,
    });
    animate(pointerX, left + carWidth / 2 - 18, {
      type: "spring",
      stiffness: 120,
      damping: 14,
    });
  }, [currentCheckpoint, checkpoints, x, pointerX]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setCurrentCheckpoint((prev) => (prev + 1) % checkpoints.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [checkpoints]);

  const getNearestCheckpointIndex = (absoluteX) => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const distances = checkpoints.map((cp) => {
      const cpX = (cp.leftPercent / 100) * containerWidth;
      return Math.abs(cpX - absoluteX);
    });
    return distances.indexOf(Math.min(...distances));
  };

  const handleDragEnd = (event, info) => {
    isDragging.current = false;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const absoluteX = info.point.x;
    const nearestIndex = getNearestCheckpointIndex(absoluteX);
    setCurrentCheckpoint(nearestIndex);
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  return (
    <div
      className="relative w-full h-[520px] sm:h-[600px] md:h-[650px] overflow-hidden font-sans bg-gradient-to-br from-sky-200 via-yellow-100 to-orange-100"
      ref={containerRef}
    >
      {/* Rising Sun */}
      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 shadow-[0_0_80px_30px_rgba(255,100,50,0.5)] z-0"
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />


      {/* Moving Clouds */}
      {["https://cdn-icons-png.flaticon.com/512/414/414927.png", "https://cdn-icons-png.flaticon.com/512/414/414927.png"].map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt="Cloud"
          className={`absolute top-${10 + idx * 10} left-${10 + idx * 20} w-${20 + idx * 10} opacity-60`}
          animate={{ x: [0, 100 * (idx % 2 === 0 ? 1 : -1), 0] }}
          transition={{ duration: 20 + idx * 2, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Additional Small Clouds on Right */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414927.png"
        alt="Small Cloud"
        className="absolute top-20 right-8 w-12 opacity-50"
        animate={{ x: [0, -80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* ✈️ Airplane Flyby */}
      <motion.img
        src="/airplane.png"
        alt="Plane"
        className="absolute top-10 left-[-120px] w-20 opacity-100 z-1"
        animate={{ x: ["-120px", "100vw"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />


      {/* Balloon */}
      <motion.img
        src="/ballon.png"
        alt="Balloon"
        className="absolute bottom-80 left-12 w-200 z-1"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Road */}
      <motion.div className="absolute bottom-0 w-full h-44 bg-black z-0 overflow-hidden">
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
      </motion.div>

      {/* Checkpoints */}
      {checkpoints.map((pos, idx) => {
        const left = `${pos.leftPercent}%`;
        return (
          <div key={idx}>
            <div
              className={`absolute w-4 sm:w-5 h-4 sm:h-5 rounded-full border-white border-2 z-0 transition-transform duration-500 ${idx === currentCheckpoint ? "bg-green-500 scale-125" : "bg-red-500"
                }`}
              style={{ left, bottom: "240px" }}
            />
            {idx === currentCheckpoint && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.4, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="absolute z-0"
                  style={{ left: `calc(${left} - 8px)`, bottom: "255px" }}
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
                  className={`absolute text-xs sm:text-sm md:text-base italic font-bold text-black text-center py-2 bg-white/90 rounded-md shadow z-0 ${idx === 0 || idx === checkpoints.length - 1 ? "px-4" : "px-3"
                    }`}
                  style={{
                    left:
                      idx === 0 || idx === checkpoints.length - 1
                        ? `calc(${left} - 40px)`
                        : `calc(${left} - 90px)`,
                    bottom: "300px",
                    width: idx === 0 || idx === checkpoints.length - 1 ? "auto" : "180px",
                    whiteSpace: "nowrap",
                  }}
                >
                  “{pos.quote}”
                </motion.div>

              </>
            )}
          </div>
        );
      })}

      {/* Car */}
      <motion.div
        className="absolute z-0 w-[140px] sm:w-[200px] md:w-[280px] lg:w-[360px] touch-none drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)]"
        style={{ x, bottom: "78px" }}
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.3}
        onDragStart={() => (isDragging.current = true)}
        onDragEnd={handleDragEnd}
      >
        <Lottie animationData={carDrive} loop className="w-full" />
      </motion.div>

      {/* Header & CTA */}
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

        {/* ✅ Paragraph shown only on medium screens and above */}
        <motion.p
          className="hidden md:block text-sm sm:text-lg md:text-xl font-medium text-gray-800 drop-shadow-sm mb-4 max-w-[70%] lg:max-w-[50%] leading-relaxed"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Unleash bold journeys. Embrace colors. Feel the freedom.
        </motion.p>

        <motion.a
          href="https://wa.me/918822016566"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="bg-green-500 text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-lg z-0 cursor-pointer"
        >
          <FaWhatsapp className="text-xl" />
          <span className="font-semibold text-sm sm:text-base">Chat on WhatsApp</span>
        </motion.a>
      </motion.div>

    </div>
  );
};

export default TravelHero;
