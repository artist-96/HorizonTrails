"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import BgImage from "../../assets/girl.jpg";
import img1 from "../../assets/service1.jpg";
import img2 from "../../assets/service2.jpg";
import img3 from "../../assets/service3.jpg";
import img4 from "../../assets/service4.jpg";
import img5 from "../../assets/service5.jpg";

const trips = [
  {
    image: img1,
    title: "Guwahati to Meghalaya",
    description: "Shillong, Cherrapunji, Dawki, Mawlynnong...Starting @4200/day",
  },
  {
    image: img2,
    title: "Guwahati to Arunachal",
    description: "Dirang, Sangti, Sela, Tawang, Bum La...Starting @4700/day",
  },
  {
    image: img3,
    title: "Guwahati Sight Seeing",
    description: "Kamakhya Temple...Starting @2700/day",
  },
  {
    image: img4,
    title: "Guwahati to Kaziranga",
    description: "Kaziranga National Park...Starting @3500/day",
  },
  {
    image: img5,
    title: "Guwahati to Manas National Park",
    description: "Manas Wildlife Sanctuary & Forest Safari...Starting @4000/day",
  },
];

const Card = ({ image, title, description, delay, onClick }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="relative group bg-white text-black rounded-3xl shadow-lg border-2 border-transparent hover:border-yellow-400 transition-all duration-300 w-full flex flex-col h-auto overflow-hidden"
  >
    <div className="w-full h-52 relative">
      <Image src={image} alt={title} fill className="object-cover rounded-t-3xl" />
    </div>

    <div className="p-6 flex flex-col justify-between flex-1 z-10">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 text-lg">
        {description.split("Starting").map((text, idx) =>
          idx === 0 ? text : (
            <span key={idx} className="font-bold italic text-black">
              Starting{text}
            </span>
          )
        )}
      </p>
    </div>

    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20 rounded-3xl">
      <button
        onClick={() => onClick({ image, title, description })}
        className="bg-green-500 text-white py-2.5 px-5 rounded-md hover:bg-green-600 active:bg-green-700 transition flex items-center gap-2 text-lg shadow-md"
      >
        <FaWhatsapp className="text-xl" />
        Book Now
      </button>
    </div>
  </motion.div>
);

const About = () => {
  const [activeTrip, setActiveTrip] = useState(null);

  const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100%",
    width: "100%",
  };

  return (
    <div className="w-full overflow-x-hidden" style={bgStyle}>
      <div className="bg-black/80 text-white py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <div className="uppercase text-center py-10 italic space-y-2">
            <p data-aos="fade-up" className="text-primary text-2xl font-semibold">
              Your Journey
            </p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl font-bold">
              Our Priority!
            </h1>
          </div>

          {/* Cards */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {trips.map((trip, index) => (
              <Card
                key={index}
                image={trip.image}
                title={trip.title}
                description={trip.description}
                delay={index * 0.1}
                onClick={setActiveTrip}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeTrip && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white text-black rounded-2xl p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-4 text-2xl text-black hover:text-red-500"
              onClick={() => setActiveTrip(null)}
            >
              &times;
            </button>
            <Image
              src={activeTrip.image}
              alt={activeTrip.title}
              className="rounded-xl w-full h-52 object-cover mb-4"
              width={400}
              height={200}
            />
            <h2 className="text-2xl font-bold mb-2">{activeTrip.title}</h2>
            <p className="mb-6">{activeTrip.description}</p>
            <a
              href="https://wa.me/917637838415"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
