"use client";
import SlideSub from "./slideSub";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";

const MainSlide = () => {
  const mainSlideArr = [
    {
      imgurl: "/imgs/main_slide/main_01.webp",
      classNm: "section_bg",
      texts: [
        {
          classnm: "text move play",
          text: "Personal Project",
          type: "small",
          tkey: "11",
        },
        {
          classnm: "text move play",
          text: "Battleforces",
          type: "big",
          tkey: "12",
        },
        {
          classnm: "text move play",
          text: "This year, we have five sets for Warhammer 40,000 and four sets for Age of Sigmar.\n All Battleforces are available while stocks last.",
          type: "paragraph",
          tkey: "13",
        },
      ],
      button: {
        classNm: "text move white_btn play",
        text: "Product info",
        linkurl: "/portfolio",
      },
    },
    {
      imgurl: "/imgs/main_slide/ronnin_img.webp",
      classNm: "section_bg",
      texts: [
        {
          classnm: "text move play",
          text: "Personal Project",
          type: "small",
          tkey: "21",
        },
        {
          classnm: "text move play",
          text: "ronindubai.com copy",
          type: "big",
          tkey: "22",
        },
        {
          classnm: "text move play",
          text: "클론코딩 \n\n GSAP에 예시로 나와있는 페이지중 RONNIN의 메인페이지에서 이펙트가 들어간 부분들 \n 기존 사이트 jquery 부분 대체",
          type: "paragraph",
          tkey: "23",
        },
      ],
      button: {
        classNm: "text move black_btn play",
        text: "Go to Ronnin",
        linkurl: "https://lichpark.github.io/ronnin_minor_copy/",
      },
    },
    {
      imgurl: "/imgs/main_slide/main_02.webp",
      classNm: "section_bg",
      texts: [
        {
          classnm: "text move play",
          text: "Personal Project",
          type: "small",
          tkey: "21",
        },
        {
          classnm: "text move play",
          text: "Point System",
          type: "big",
          tkey: "22",
        },
        {
          classnm: "text move play",
          text: "Announcement of New Points Accrual System Starting in 2025\nWe are pleased to announce the implementation of a new points accrual system,\nwhich will take effect from January 1, 2025. This new system is designed to enhance your experience\nand provide greater benefits as a part of our continuous effort to serve you better.    ",
          type: "paragraph",
          tkey: "23",
        },
      ],
      button: {
        classNm: "text move black_btn play",
        text: "Product info",
        linkurl: "/portfolio",
      },
    },
    // {
    //   imgurl: "/imgs/main_slide/main_03.jpg",
    //   classNm: "section_bg",
    //   texts: [
    //     {
    //       classnm: "text move play",
    //       text: "Personal Project",
    //       type: "small",
    //       tkey: "31",
    //     },
    //     {
    //       classnm: "text move play",
    //       text: "Pre - Order",
    //       type: "big",
    //       tkey: "32",
    //     },
    //     {
    //       classnm: "text move play",
    //       text: "PRE-ORDER DATE\n 2024-11-16\nAm 10:00",
    //       type: "paragraph",
    //       tkey: "33",
    //     },
    //   ],
    //   button: {
    //     classNm: "text move white_btn play",
    //     text: "Product info",
    //     linkurl: "/portfolio",
    //   },
    // },
  ];

  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };

  return (
    <section
      className="swiper_container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id="main_top"
    >
      <Swiper
        modules={[Autoplay]}
        ref={swiperRefLocal}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {mainSlideArr.map((v, idx) => (
          <SwiperSlide key={idx}>
            <SlideSub {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSlide;
