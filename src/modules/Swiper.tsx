import React from "react";
import { Navigation, FreeMode } from "swiper";
import { Swiper } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

type SwiperProps = {
  children: React.ReactNode;
  id: number;
};
export const SwiperTemp = ({ children, id }: SwiperProps) => {
  return (
    <div className="swiper-pleace">
      <div className={`slide-button-prev`} id={`prev-${id}`}>
        <MdKeyboardArrowLeft />
      </div>
      <Swiper
        spaceBetween={50}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          850: {
            slidesPerView: 3,
          },
          1080: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: `#next-${id}`,
          prevEl: `#prev-${id}`,
        }}
      >
        {children}
      </Swiper>
      <div className={`slide-button-next`} id={`next-${id}`}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};
export const SwiperExcVid = ({ children, id }: SwiperProps) => {
  return (
    <div className="swiper-pleace video">
      <div className={`slide-button-prev`} id={`prev-${id}`}>
        <MdKeyboardArrowLeft />
      </div>
      <Swiper
        modules={[Navigation, FreeMode]}
        freeMode={true}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 250,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 250,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
        navigation={{
          nextEl: `#next-${id}`,
          prevEl: `#prev-${id}`,
        }}
      >
        {children}
      </Swiper>
      <div className={`slide-button-next`} id={`next-${id}`}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};
