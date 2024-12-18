"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ProductSwiper = (props) => {
  if (props.imgs.length == 1) {
    props.imgs[1] = props.imgs[0];
  }

  return (
    <article className="product_wrap__article">
      <Swiper
        loop={true}
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        speed={1000}
        watchOverflow={false}
      >
        {props.imgs.map((v, idx) => (
          <SwiperSlide key={idx}>
            <Image
              width={200}
              height={200}
              className="product_img"
              src={`${v}`}
              alt=""
              title=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default ProductSwiper;
