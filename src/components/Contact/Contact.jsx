"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import yellowCab from "../../assets/yellow-cab.png";

const Contact = () => {
  return (
    <div className="relative text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10 sm:pb-0 overflow-hidden">
      {/* Background Sunset Gradient - Lightened */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FFF1DC] via-[#FFD9C0] to-[#FFC0CB]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">

          {/* Left Text Content Section */}
          <div className="space-y-5 sm:p-16 pb-6">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold">
              Best In City
            </h1>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              TRUSTED CAB AND TOUR-TRAVEL SERVICES IN NORTHEAST INDIA
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
              Our Services Include: <br />
              ✔ Local & Outstation Cab Bookings <br />
              ✔ One-Way & Round-Trip Rides <br />
              ✔ Full-Day & Half-Day City Tours <br />
              ✔ Pilgrimage & Adventure Getaways <br />
              ✔ Wedding & Event Transportation <br />
              <br />
              📞 Book Now & Enjoy a Seamless Journey! <br />
              <b>Call/WhatsApp: +917637838415 +918822016566</b> <br />
              <br />
              <b>
                Travel with confidence – because your comfort and safety is our
                top priority! 🌿🚖✨
              </b>
            </p>
            <a
              href="https://wa.me/917637838415"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                data-aos="fade-up"
                data-aos-offset="0"
                className="bg-black text-white px-4 py-2 rounded-lg transition duration-150 hover:bg-gray-800 active:bg-gray-900"
              >
                Book Now
              </button>
            </a>
          </div>

          {/* Right Side Form Section */}
          <div className="w-full md:max-w-[350px] mx-auto relative">
            {/* Animated Cab Image */}
            <motion.div
              className="absolute -top-28 left-0 sm:-left-20 sm:-top-36"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: [0, 30, -30, 30, 0], opacity: 1 }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  repeatDelay: 0.5,
                },
                opacity: { duration: 1 },
              }}
            >
              <Image
                src={yellowCab}
                alt="Yellow Cab"
                className="w-[550px] sm:w-[600px]"
                priority
              />
            </motion.div>

            {/* Action Buttons */}
            <div className="mt-60 relative z-10">
              <a
                href="https://wa.me/917637838415"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="col-span-2 w-full text-white py-5 px-10 rounded-lg bg-blue-500 transition duration-150 hover:bg-blue-600 active:bg-blue-700">
                  Book a Cab
                </button>
              </a>
              <a
                href="https://wa.me/917637838415"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="col-span-2 w-full mt-6 text-white py-5 px-10 rounded-lg bg-blue-500 transition duration-150 hover:bg-blue-600 active:bg-blue-700">
                  Plan a Tour
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
