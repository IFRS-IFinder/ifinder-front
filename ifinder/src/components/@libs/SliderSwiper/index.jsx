"use client"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay, EffectCards } from "swiper/modules";

import "./slider-swiper.css";
import { Children } from "react";


export function SliderSwiper({ settings, children }) {
  const childrenWithSwiperSlide = Children.map(children, (child) => (
    <SwiperSlide>{child}</SwiperSlide>
  ));

  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay, EffectCards]} {...settings}>
      {childrenWithSwiperSlide}
    </Swiper>
  );
}
