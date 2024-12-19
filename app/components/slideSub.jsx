"use client";

import { useCallback, useEffect, useRef } from "react";
import Texts from "./texts";
import gsap from "gsap";
import MainButton from "./mainButton";
import Image from "next/image";

const SlideSub = (props) => {
  const tl = useRef(null);
  const textRef = useRef(null);

  const animation = (tl, el) => {
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

  const animation_y = (tl, el) => {
    tl.fromTo(
      el,
      {
        opacity: 0,
        y: -100,
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

  const handleScroll = useCallback(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const elementHeight = rect.bottom - rect.top;
      const isVisible =
        rect.top < window.innerHeight && rect.bottom > elementHeight / 2;

      if (isVisible) {
        if (!tl.current) {
          tl.current = gsap.timeline({ repeat: 0 });
          animation(tl.current, ".small");
          animation(tl.current, ".big");
          animation_y(tl.current, ".paragraph");
          animation_y(tl.current, ".main_btn_wrp");
        }
        tl.current.play();
      } else {
        if (tl.current) {
          tl.current.reverse();
        }
      }
    }
  }, [textRef, tl]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      ref={textRef}
      style={{ backgroundImage: `url(${props.imgurl})` }}
      className={props.classNm}
    >
      <div className="slide_text_wrap">
        <div className="t_wrap">
          {props.texts.map((v) => (
            <Texts key={v.tkey} {...v} />
          ))}
          <div className="main_btn_wrp">
            <MainButton {...props.button} />
          </div>
        </div>
      </div>
      {/* <Image
        width={100}
        height={100}
        src={`${props.imgurl}`}
        quality={100}
        alt=""
      /> */}
    </section>
  );
};

export default SlideSub;
