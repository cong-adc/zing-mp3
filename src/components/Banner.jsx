import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../../data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default function Banner() {
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <div className="h-48 px-10 mt-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="rounded-2xl overflow-hidden">
            <img src={item.cover} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
