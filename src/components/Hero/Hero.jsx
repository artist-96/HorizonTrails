"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Lottie from "lottie-react";
import { FaWhatsapp } from "react-icons/fa";
import carDrive from "../../lotties/car-drive.json";

const TravelHero = () => {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  // ✅ Correct useEffect at top level
  useEffect(() => {
    const unsubscribe = x.on("change", (latestX) => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const percentage = (latestX / width) * 100;

      // Set checkpoint based on how far the car has been dragged
      if (percentage < 25) setCurrentCheckpoint(0);
      else if (percentage < 50) setCurrentCheckpoint(1);
      else if (percentage < 75) setCurrentCheckpoint(2);
      else setCurrentCheckpoint(3);
    });

    return () => unsubscribe();
  }, [x]);

  const checkpoints = ["Book", "Ride", "Explore", "Repeat"];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[90vh] overflow-hidden flex flex-col justify-center items-center bg-gradient-to-b from-orange-100 to-blue-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
    >
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          Horizon Trails
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-2">
          {checkpoints[currentCheckpoint]}
        </p>
      </div>

      <motion.div
        className="w-[180px] h-[180px] z-20 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={containerRef}
        style={{ x }}
        dragElastic={0.2}
      >
        <Lottie animationData={carDrive} loop autoplay />
      </motion.div>

      <motion.a
        href="https://wa.me/917637838415"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-10 right-10 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition"
      >
        <FaWhatsapp />
        Book Now
      </motion.a>
    </div>
  );
};

export default TravelHero;
