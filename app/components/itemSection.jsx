"use client";
import ItemCard from "./itemCard";
import ItemDesc from "./itemDesc";
import ItemTitle from "./itemTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ItemSection = (props) => {
  const [swiper, setSwiper] = useState();

  const tl = useRef(null);
  const textRef = useRef(null);

  const animation_left = (tl, el) => {
    tl.fromTo(
      el,
      {
        opacity: 0,
        x: -100,
        delay: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        x: 0,
        delay: 0.3,
      }
    );
  };

  const animation_right = (tl, el) => {
    tl.fromTo(
      el,
      {
        opacity: 0,
        x: 100,
        delay: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        x: 0,
        delay: 0.3,
      }
    );
  };

  const animation_up = (tl, el) => {
    tl.fromTo(
      el,
      {
        opacity: 0,
        y: 20,
        delay: 0,
      },
      {
        opacity: 1,
        duration: 0.3,
        y: 0,
        delay: 0.3,
      }
    );
  };

  const handleScroll = () => {
    if (textRef.current) {
      // const rect = textRef.current.getBoundingClientRect();
      // const isVisible = rect.top && rect.bottom <= window.innerHeight;

      const rect = textRef.current.getBoundingClientRect();
      const elementHeight = rect.bottom - rect.top;
      const isVisible =
        rect.top < window.innerHeight && rect.bottom > elementHeight / 2;

      if (isVisible) {
        if (!tl.current) {
          tl.current = gsap.timeline({ repeat: 0 });
          animation_right(
            tl.current,
            textRef.current.querySelector(".itemtitle")
          );
          animation_right(
            tl.current,
            textRef.current.querySelector(".item_border__div")
          );
          animation_left(
            tl.current,
            textRef.current.querySelector(".itemdesc")
          );
          if (textRef.current.querySelectorAll(".card_img").length > 0) {
            animation_up(
              tl.current,
              textRef.current.querySelectorAll(".card_img")
            );
          }
        }
        tl.current.play();
      } else {
        if (tl.current) {
          tl.current.reverse();
        }
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (props.swipearr.length > 0) {
    //navigation custom
    const handlePrev = () => {
      swiper?.slidePrev();
    };
    const handleNext = () => {
      swiper?.slideNext();
    };

    return (
      <section className={`${props.sectionClass} item_section`} ref={textRef}>
        <ItemTitle title={props.title} />
        <div className="item_border__div"></div>
        <ItemDesc subtext={props.subtext} />
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          slidesPerView={4}
          spaceBetween={50}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onSwiper={(e) => {
            setSwiper(e);
          }}
          breakpoints={{
            319: {
              slidesPerView: 1, //브라우저가 319보다 클 때
              spaceBetween: 5,
            },
            767: {
              slidesPerView: 2, //브라우저가 768보다 클 때
              spaceBetween: 10,
            },
            1023: {
              slidesPerView: 4, //브라우저가 1024보다 클 때
              spaceBetween: 50,
            },
          }}
        >
          {props.swipearr.map((v, idx) => (
            <SwiperSlide key={idx}>
              <ItemCard {...v} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button onClick={handleNext} className="swiper_nav_left">
          <BiCaretLeftCircle />
        </button>

        <button onClick={handlePrev} className="swiper_nav_right">
          <BiCaretRightCircle />
        </button>
      </section>
    );
  } else if (props.gridarr.length > 0) {
    return (
      <section className={`${props.sectionClass} item_section`} ref={textRef}>
        <ItemTitle title={props.title} />
        <div className="item_border__div"></div>
        <ItemDesc subtext={props.subtext} />
        <div className="preorder_grid">
          {props.gridarr.map((v, idx) => (
            <ItemCard {...v} key={"item_" + idx} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className={`item_section ${props.sectionClass}`} ref={textRef}>
        <ItemTitle title={props.title} />
        <div className="item_border__div"></div>
        <ItemDesc subtext={props.subtext} />
        <div className="full_movie">
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/B9V0bOB8sXQ?si=YGc6aZsXZmoA1knq"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    );
  }
};

export default ItemSection;
