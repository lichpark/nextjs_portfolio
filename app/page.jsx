"use client";
import Link from "next/link";
import "./style/main.css";
import "./style/reset.css";
import KeyValText from "./components/keyValText";
import Image from "next/image";
import { portfolio_list } from "./data/mainData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";

// export const metadata = {
//   title: "portfolos page",
//   description: "choose my portfolio",
// };

export default function Home() {
  // redirect("/portfolio");

  return (
    <div className="mainWrp bg-black">
      <h1 className="main_title"> WELCOME! CHOOSE PORTFOLIO</h1>
      <section className="w-screen  pt-20">
        <Swiper
          className="w-full h-[80%]"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[EffectCoverflow, Autoplay]}
        >
          {portfolio_list.map((v, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                width: "70%",
                position: "relative",
              }}
            >
              <Link
                href={v.urlLink}
                target="_blank"
                className="section_wrp"
                key={idx}
              >
                <div className="img__div">
                  <Image
                    width={500}
                    height={300}
                    alt=""
                    src={`${v.imgurl}`}
                    title=""
                    className="img"
                  />
                </div>
                <div className="texts">
                  {v.texts.map((val, subidx) => (
                    <div key={idx + "_" + subidx} className="keyvalwrp">
                      <KeyValText
                        keyClass={val.keyClass}
                        keyText={val.keyText}
                        valClass={val.valClass}
                        valText={val.valText}
                      />
                    </div>
                  ))}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
