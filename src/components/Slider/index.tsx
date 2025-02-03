import "./style.css"
import Slide1 from "./images/saayaImg1.jpg";
import Slide2 from "./images/saayaImg2.jpg";
import Slide3 from "./images/saayaImg3.jpg";
import Slide4 from "./images/saayaImg4.jpg";
import Slide5 from "./images/saayaImg5.jpg";


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
];

const ImageSlider: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[500px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
