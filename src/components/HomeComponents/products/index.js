import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Navigation } from "swiper/modules";
import Image from "next/image";

export default function ProductCarousel({ products }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
            0:{
                slidesPerView: 1,
                spaceBetween: 10
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 30
            }
        }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {products?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <div className="product-image">
                <Image
                  width={400}
                  height={400}
                  src={item?.image}
                  alt={item?.title}
                />
              </div>
              <div className="product-info">
                <h2>{item?.title}</h2>
                <p className="description">{item?.description}</p>
                <p className="price">${item?.price}</p>
                <div className="rating">
                  <p>Rating: {item?.rating?.rate} ({item?.rating?.count} reviews)</p>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev" >
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="swiper-button-next" >
        <i className="fas fa-chevron-right"></i>
      </div>
    </>
  );
}
