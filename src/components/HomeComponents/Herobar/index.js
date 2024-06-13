import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export function Herobar({ data }) {
  return (
    <Swiper spaceBetween={30} speed={700} autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }} modules={[Autoplay]} >
        {data?.map((itm,index)=>(<SwiperSlide key={index}>
        <div class="hero-bar">
          <div class="hero-content">
            <h1>{itm?.title}</h1>

            <p class="price">${itm?.price}</p>
            <button class="buy-button">Buy Now</button>
          </div>
          <div class="hero-image">
            <img
              src={itm?.image}
              alt={itm?.title}
            />
          </div>
        </div>
      </SwiperSlide>))}
      
    </Swiper>
  );
}
