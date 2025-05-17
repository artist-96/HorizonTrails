import React from "react";
import Img2 from "../../assets/car2.png";
import Image from "next/image";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "One-way Trip",
    description:
      "Enjoy a convenient and cost-effective ride to your destination with our one-way trip service—perfect for airport drops, intercity travel, or single-stop journeys. No return required, just a smooth and timely ride with Super Cabs.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Round Trip",
    description:
      "Travel to your destination and back with ease. Our round trip service offers comfort, reliability, and flexibility—ideal for day trips, business meetings, or events with a planned return.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Tour Packages",
    description:
      "Explore new destinations with comfort and peace of mind. Our tours and outstation services are perfect for weekend getaways, sightseeing trips, and long-distance travel—driven by experienced professionals you can trust.",
    description2 : "",
    aosDelay: "500",
  },
];
const BestCabs = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark text-black dark:text-white">
      <div className="container">
        {/* header title section */}
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Select your preferred service
          </h1>
        </div>

        {/* Best Cab Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
          {ServicesData.map(({ id, img, name, description, aosDelay }) => {
            return (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                className="group rounded-2xl bg-white dark:bg-black hover:!bg-primary shadow-xl duration-200 max-w-[300px] relative"
              >
                {/* image section */}
                <div className="h-[110px]">
                  <Image
                    src={img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300"
                  />
                </div>
                {/* text content section */}
                <div className="p-4 text-center space-y-4">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2">
                    {description}
                  </p>
                  {<p className="text-primary text-2xl font-bold group-hover:text-black">
                  
                  </p>}
                  <button className="bg-black text-white px-4 py-2 rounded-lg">
                    Call Us
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestCabs;
