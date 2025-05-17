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

const Footer = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* upper section Banner */}
      <div className="bg-primary">
        <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
          <p>Our team is available round the clock—24/7—to assist you with seamless travel solutions!</p>
          <h1 className="text-3xl md:text-5xl font-bold">+91 7637838415</h1>
        </div>
      </div>

      {/* Bottom Footer section */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
        {/* first col section */}
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            About Super Cabs
          </h1>
          <p>
            Super Cabs offers reliable, comfortable, and professional transportation for every occasion. From airport transfers and city rides to customized tours, we ensure a smooth, hassle-free experience with courteous drivers and well-maintained vehicles. Whether you're a local or a visitor, we’re here to get you where you need to go—safely, on time, and in style.
          </p>
          {/* social links */}
          <div className="flex items-center text-primary gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>

        {/* second col section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Download
          </h1>
          <p>
            App under development
          </p>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            Android user{" "}
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            IOS user{" "}
            <span>
              <FaAppStoreIos className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
        </div>
        {/* third col section */}
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Contact Us
          </h1>
          <div className="flex items-center gap-4">
            <FaMapMarker /> Azara, Lower Mirzapur near LGBI International Airport Guwahati 781017 Assam
          </div>
          <div className="flex items-center gap-4">
            <MdCall />
            +91 7637838415
          </div>
          <div className="flex items-center gap-4">
           <MdEmail/> <a href="info.supercabs@gmail.com">info.supercabs@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <FaMousePointer /> www.supercabs.co
          </div>
        </div>
      </div>
      <p className="text-center py-4 text-sm">
        Copyright © 2025. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
