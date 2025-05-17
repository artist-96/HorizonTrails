// import React from "react";
// import yellowCab from "../../assets/yellow-cab.png";
// import bgCity from "../../assets/city.jpg";
// import Image from "next/image";

// const bgStyle = {
//   backgroundImage: `url(${bgCity.src})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   height: "520px",
//   width: "100vw",
// };
// const Hero = () => {
//   return (
//     <div style={bgStyle}>
//       <div className="dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex">
//         <div className="container grid grid-cols-1 place-items-center">
//           {/* text content section */}
//           <div className="text-center space-y-5 py-14">
//             <p
//               data-aos="fade-up"
//               className="text-primary text-3xl font-semibold uppercase"
//             >
//               Book Your Cab now
//             </p>
//             <h1
//               data-aos="fade-up"
//               data-aos-delay="600"
//               className="text-4xl md:text-6xl font-bold"
//             >
//               +91 7637838415
//             </h1>
//             <p
//               data-aos="fade-up"
//               data-aos-delay="1000"
//               className="tracking-[8px] text-base sm:text-xl font-semibold"
//             >
//               www.supercabs.co
//             </p>
//           </div>
//           {/* Image section */}
//           <div data-aos="zoom-in-right" data-aos-duration="1000">
//             <Image
//               src={yellowCab}
//               alt="yellow cab"
//               className="max-h-[460px] sm:scale-125 translate-y-10 sm:translate-y-0"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



// import React, { useState, useEffect } from "react";
// import yellowCab from "../../assets/yellow-cab.png";
// import bgCity1 from "../../assets/city1.jpg";
// import bgCity2 from "../../assets/city2.jpg";
// import bgCity3 from "../../assets/city3.jpg";
// import bgCity4 from "../../assets/city4.jpg";
// import bgCity5 from "../../assets/city5.jpg";
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Hero = () => {
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);

//   // Array of background images
//   const backgroundImages = [
//     bgCity1.src,
//     bgCity2.src,
//     bgCity3.src,
//     bgCity4.src,
//     bgCity5.src
//   ];

//   // Auto-rotate backgrounds every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => 
//         prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [backgroundImages.length]);

//   const goToPrev = () => {
//     setCurrentBgIndex((prevIndex) => 
//       prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
//     );
//     // Reset the auto-slide timer
//     clearInterval();
//   };

//   const goToNext = () => {
//     setCurrentBgIndex((prevIndex) => 
//       prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//     );
//     // Reset the auto-slide timer
//     clearInterval();
//   };

//   // Style with dynamic background image
//   const bgStyle = {
//     backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: "520px",
//     width: "100vw",
//     transition: "background-image 2s ease-in"
//   };

//   return (
//     <div style={bgStyle} className="relative">
//       {/* Navigation Arrows */}
//       <button 
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
//         aria-label="Previous image"
//       >
//         <FaChevronLeft size={24} />
//       </button>

//       <button 
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
//         aria-label="Next image"
//       >
//         <FaChevronRight size={24} />
//       </button>

//       <div className="dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex">
//         <div className="container grid grid-cols-1 place-items-center">
//           {/* text content section */}
//           <div className="text-center space-y-5 py-14">
//             <p
//               data-aos="fade-up"
//               className="text-primary text-3xl font-semibold uppercase"
//             >
//               Book Your Cab now
//             </p>
//             <h1
//               data-aos="fade-up"
//               data-aos-delay="600"
//               className="text-4xl md:text-6xl font-bold"
//             >
//               +91 7637838415
//             </h1>
//             <p
//               data-aos="fade-up"
//               data-aos-delay="1000"
//               className="tracking-[8px] text-base sm:text-xl font-semibold"
//             >
//               www.supercabs.co
//             </p>
//           </div>
//           {/* Image section */}
//           <div data-aos="zoom-in-right" data-aos-duration="1000">
//             <Image
//               src={yellowCab}
//               alt="yellow cab"
//               className="max-h-[460px] sm:scale-125 translate-y-10 sm:translate-y-0"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useState, useEffect, useRef } from "react";
// import yellowCab from "../../assets/yellow-cab.png";
// import bgCity1 from "../../assets/city1.jpg";
// import bgCity2 from "../../assets/city2.jpg";
// import bgCity3 from "../../assets/city3.jpg";
// import bgCity4 from "../../assets/city4.jpg";
// import bgCity5 from "../../assets/city5.jpg";
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Hero = () => {
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const intervalRef = useRef(null);

//   const backgroundImages = [
//     bgCity1.src,
//     bgCity2.src,
//     bgCity3.src,
//     bgCity4.src,
//     bgCity5.src,
//   ];

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const startAutoSlide = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentBgIndex((prevIndex) =>
//         prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
//   };

//   const goToPrev = () => {
//     setCurrentBgIndex((prevIndex) =>
//       prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
//     );
//     startAutoSlide();
//   };

//   const goToNext = () => {
//     setCurrentBgIndex((prevIndex) =>
//       prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//     );
//     startAutoSlide();
//   };

//   return (
//     <div className="relative overflow-hidden h-[520px] w-screen">
//       {/* Sliding Backgrounds */}
//       <div
//         className="absolute top-0 left-0 flex h-full w-full z-0 transition-transform duration-1000 ease-in-out"
//         style={{
//           width: `${backgroundImages.length * 100}vw`,
//           transform: `translateX(-${currentBgIndex * 100}vw)`,
//         }}
//       >
//         {backgroundImages.map((bg, index) => (
//           <div
//             key={index}
//             className="w-screen h-full bg-cover bg-center flex-shrink-0"
//             style={{ backgroundImage: `url(${bg})` }}
//           />
//         ))}
//       </div>

//       {/* Content & Cab - Positioned Above */}
//       <div className="relative z-10 dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-full flex">
//         <div className="container grid grid-cols-1 place-items-center">
//           <div className="text-center space-y-5 py-14">
//             <p
//               data-aos="fade-up"
//               className="text-primary text-3xl font-semibold uppercase"
//             >
//               Book Your Cab now
//             </p>
//             <h1
//               data-aos="fade-up"
//               data-aos-delay="600"
//               className="text-4xl md:text-6xl font-bold"
//             >
//               +91 7637838415
//             </h1>
//             <p
//               data-aos="fade-up"
//               data-aos-delay="1000"
//               className="tracking-[8px] text-base sm:text-xl font-semibold"
//             >
//               www.supercabs.co
//             </p>
//           </div>

//           <div
//             data-aos="zoom-in-right"
//             data-aos-duration="1000"
//             className="relative z-10"
//           >
//             <Image
//               src={yellowCab}
//               alt="yellow cab"
//               className="max-h-[350px] sm:max-h-[460px] scale-100 translate-y-8 sm:translate-y-0"

//             />
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows - Highest Layer */}
//       <button
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
//         aria-label="Previous image"
//       >
//         <FaChevronLeft size={24} />
//       </button>

//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
//         aria-label="Next image"
//       >
//         <FaChevronRight size={24} />
//       </button>
//     </div>
//   );
// };

// export default Hero;


// import React, { useState, useEffect, useRef } from "react";
// import yellowCab from "../../assets/yellow-cab.png";
// import bgCity1 from "../../assets/city1.jpg";
// import bgCity2 from "../../assets/city2.jpg";
// import bgCity3 from "../../assets/city3.jpg";
// import bgCity4 from "../../assets/city4.jpg";
// import bgCity5 from "../../assets/city5.jpg";
// import Image from "next/image";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Hero = () => {
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
//   const slideIntervalRef = useRef(null);

//   const backgroundImages = [
//     bgCity1,
//     bgCity2,
//     bgCity3,
//     bgCity4,
//     bgCity5
//   ];

//   const startSlideTimer = () => {
//     slideIntervalRef.current = setInterval(() => {
//       setCurrentBgIndex((prevIndex) =>
//         prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);
//   };

//   useEffect(() => {
//     startSlideTimer();
//     return () => clearInterval(slideIntervalRef.current);
//   }, []);

//   const goToPrev = () => {
//     clearInterval(slideIntervalRef.current);
//     setCurrentBgIndex((prevIndex) =>
//       prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
//     );
//     startSlideTimer();
//   };

//   const goToNext = () => {
//     clearInterval(slideIntervalRef.current);
//     setCurrentBgIndex((prevIndex) =>
//       prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//     );
//     startSlideTimer();
//   };

//   return (
//     <div className="relative w-screen h-[520px] overflow-hidden">
//       {/* Sliding Track */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out h-full"
//         style={{
//           width: `${backgroundImages.length * 100}vw`,
//           transform: `translateX(-${currentBgIndex * 100}vw)`,
//         }}
//       >
//         {backgroundImages.map((bg, index) => (
//           <div
//             key={index}
//             className="w-screen h-full bg-cover bg-center bg-no-repeat"
//             style={{ backgroundImage: `url(${bg.src})` }}
//           />
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={goToPrev}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
//         aria-label="Previous image"
//       >
//         <FaChevronLeft size={24} />
//       </button>

//       <button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
//         aria-label="Next image"
//       >
//         <FaChevronRight size={24} />
//       </button>

//       {/* Overlay content */}
//       <div className="absolute top-0 left-0 w-full h-full dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 flex">
//         <div className="container grid grid-cols-1 place-items-center">
//           <div className="text-center space-y-5 py-14">
//             <p className="text-primary text-3xl font-semibold uppercase">Book Your Cab now</p>
//             <h1 className="text-4xl md:text-6xl font-bold">+91 7637838415</h1>
//             <p className="tracking-[8px] text-base sm:text-xl font-semibold">www.supercabs.co</p>
//           </div>
//           <div>
//             <Image
//               src={yellowCab}
//               alt="yellow cab"
//               className="max-h-[460px] sm:scale-125 translate-y-10 sm:translate-y-0"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect, useRef } from "react";
import bgCity1 from "../../assets/city1.jpg";
import bgCity2 from "../../assets/city2.jpg";
import bgCity3 from "../../assets/city3.jpg";
import bgCity4 from "../../assets/city4.jpg";
import bgCity5 from "../../assets/city5.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
          <p className="text-primary text-3xl font-semibold uppercase" data-aos="fade-up">
            Book Your Cab
          </p>
          <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-up" data-aos-delay="600">
            +91 7637838415
          </h1>
          <p
            className="tracking-[8px] text-base sm:text-xl font-semibold"
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
