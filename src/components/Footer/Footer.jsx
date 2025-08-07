"use client";
import React from "react";
import {
  FaAndroid,
  FaAppStoreIos,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMapMarker,
  FaMousePointer,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/horizontrails",
    label: "Visit our Facebook page",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/horizontrails",
    label: "Visit our Instagram page",
  },
  {
    icon: <FaGoogle />,
    url: "https://www.google.com/maps/place/Horizon+Trails",
    label: "Find us on Google Maps",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/horizontrails",
    label: "Visit our Twitter page",
  },
];

const Footer = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* upper section Banner */}
      <div className="bg-primary">
        <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
          <p>
            Our team is available round the clock—24/7—to assist you with seamless travel solutions!
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">+91 7637838415</h1>
        </div>
      </div>

      {/* Bottom Footer section */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
        {/* About Section */}
        <div className="space-y-6 max-w-prose">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            About Horizon Trails
          </h1>
          <p>
<<<<<<< HEAD
            Horizon Trails offers reliable, comfortable, and professional transportation for every occasion. From airport transfers and city rides to customized tours, we ensure a smooth, hassle-free experience with courteous drivers and well-maintained vehicles. Whether you're a local or a visitor, we're here to get you where you need to go—safely, on time, and in style.
=======
            Horizon Trails offers reliable, comfortable, and professional transportation for every occasion. From airport transfers and city rides to customized tours, we ensure a smooth, hassle-free experience with courteous drivers and well-maintained vehicles. Whether you&apos;re a local or a visitor, we’re here to get you where you need to go—safely, on time, and in style.
>>>>>>> 0bddf8b (first commit)
          </p>

          {/* Social Icons with aria-label */}
          <div className="flex items-center gap-4 text-2xl text-primary">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                whileTap={{ scale: 1.2 }}
                className="transition duration-300 hover:drop-shadow-[0_0_10px_#F97316]"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Download
          </h1>
          <p>App under development</p>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            Android user
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            IOS user
            <span>
              <FaAppStoreIos className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
        </div>

        {/* Contact Section with address tag */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Contact Us
          </h1>
          <address className="not-italic space-y-3 text-sm">
            <div className="flex items-start gap-4">
              <FaMapMarker />
              <span>
                Azara, Lower Mirzapur near LGBI International Airport, Guwahati – 781017, Assam
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MdCall /> +91 7637838415
            </div>
            <div className="flex items-center gap-4">
              <MdEmail />
              <a href="mailto:info.horizontrails@gmail.com">
                info.horizontrails@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaMousePointer />
              <a
                href="https://www.horizontrails.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.horizontrails.in
              </a>
            </div>
          </address>
        </div>
      </div>

      <p className="text-center py-4 text-sm">
        Copyright © 2025. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
