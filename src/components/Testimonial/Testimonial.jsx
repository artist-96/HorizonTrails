import React from "react";
import Slider from "react-slick";
import BgImage from "../../assets/testimonial.png";
import Image from "next/image";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: "auto",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Swift Dzire",
    text: "Comes with a driver cum Tour Guide with 10 years of experience driving in local and regional routes. Good for outstation tours namely Meghalaya, Arunachal, Tawang, etc.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8y4MlhUkMZvyS2fIdhTD96_OGd__08atZNA&s",
    vehicle: "Swift Dzire",
  },
  {
    id: 2,
    name: "Innova Crysta",
    text: "Comes with a driver cum Tour Guide with 10 years of experience driving in local and regional routes. Good for outstation tours namely Meghalaya, Arunachal, Tawang, etc.",
    img: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
    vehicle: "Innova",
  },
  {
    id: 3,
    name: "Swift Dzire",
    text: "Comes with a driver cum Tour Guide with 10 years of experience driving in local and regional routes. Good for outstation tours namely Meghalaya, Arunachal, Tawang, etc.",
    img: "https://motomotar.com/wp-content/uploads/2024/04/Maruti-Dzire-2024-reder.jpg",
  },
  {
    id: 5,
    name: "Innova Crysta",
    text: "Comes with a driver cum Tour Guide with 10 years of experience driving in local and regional routes. Good for outstation tours namely Meghalaya, Arunachal, Tawang, etc.",
    img: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
  },
];
const Testimonial = () => {
  // slider config
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={bgStyle}>
      <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
        <div className="container">
          {/* header section */}
          <div data-aos="fade-up" className="text-center mb-10">
            <h1 className="text-4xl font-bold ">Our Rides</h1>
          </div>

          {/* Testimonials cards Section */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative">
                      {/* content section */}
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-xs">{text}</p>
                      </div>
                      {/* image section */}
                      <div className="flex items-center gap-4">
                        <img
                          src={img}
                          alt={name}
                          className="rounded-full w-16 h-16"
                        />
                        <div className="space-y-2">
                          <h1 className="text-xl font-bold text-black/60 dark:text-primary font-cursive">
                            {name}
                          </h1>
                          <p className="text-sm font-bold text-black/45 dark:text-white">
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
