import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import aa from "../assets/1.gif";
// import one from "../assets/1.gif";

const SwiperReact = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className="swip_image" src={aa}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swip_image" src={aa}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swip_image" src={aa}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img className="swip_image" src={aa}></img>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default SwiperReact;
