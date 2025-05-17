"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BgImage from "../../assets/girl.jpg";
import img1 from "../../assets/service1.jpg";
import img2 from "../../assets/service2.jpg";
import img3 from "../../assets/service3.jpg";
import img4 from "../../assets/service4.jpg";

// Card Component
const Card = ({ image, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-white text-black rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.03] border-2 border-transparent hover:border-yellow-400 transition-all duration-300 overflow-hidden"
  >
    <div className="w-full h-52 relative">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover"
      />
    </div>
    <div className="p-6">
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
  </motion.div>
);

const About = () => {
  const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100%",
    width: "100%",
  };

  return (
    <div style={bgStyle}>
      <div className="bg-black/80 text-white py-20 px-6">
        <div className="container mx-auto">
          <div className="uppercase text-center py-10 italic space-y-2">
            <p data-aos="fade-up" className="text-primary text-2xl font-semibold">
              Your Journey
            </p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl font-bold">
              Our Priority!
            </h1>
          </div>

          {/* Cards Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            <Card
              image={img1}
              title="Guwahati to Meghalaya"
              description="Shillong, Cherrapunji, Dawki, Mawlynnong...Starting @3500/day"
              delay={0}
            />
            <Card
              image={img2}
              title="Guwahati to Arunachal"
              description="Dirang, Sangti, Sela, Tawang, Bum La...Starting @4500/day"
              delay={0.1}
            />
            <Card
              image={img3}
              title="Guwahati Sight Seeing"
              description="Kamakhya Temple...Starting @2500/day"
              delay={0.2}
            />
            <Card
              image={img4}
              title="Guwahati to Kaziranga"
              description="Kaziranga National Park...Starting @3500/day"
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
