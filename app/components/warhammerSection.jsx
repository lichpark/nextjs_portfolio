"use client";
import WarhammerSecDiv from "./warhammerSecDiv";
import { useCallback, useEffect, useRef } from "react";
// gsap
import gsap from "gsap";

const WarhammerSection = () => {
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
        duration: 0.1,
        x: 0,
        delay: 0.1,
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
        duration: 0,
        x: 0,
        delay: 0,
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
          animation_left(tl.current, ".toleft");
          animation_right(tl.current, ".toright_title");
          animation_right(tl.current, ".toright_desc");
          animation_right(tl.current, ".toright_button");
          animation_right(tl.current, ".toright");
          animation_left(tl.current, ".toleft_title");
          animation_left(tl.current, ".toleft_desc");
          animation_left(tl.current, ".toleft_button");
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

  const secArr = [
    {
      wrpclassnm: "section2_wrap left topmargin",
      section: [
        {
          classnm: "section2_sub toleft",
          imgurl: "/imgs/main_b_01.webp",
          texts: "",
          linkurl: "/portfolio/list/00010001/list",
          button: {},
          seckey: "sec1_1",
        },
        {
          classnm: "section2_sub1 right0 ",
          imgurl: "",
          texts: [
            {
              classnm: "text move play  toright_title",
              text: "Warhammer 40,000",
              type: "title",
              textkey: "s1_1",
            },
            {
              classnm: "text move play  toright_desc",
              text: "워해머 40K는 먼 미래의 어두운 우주를 배경으로\n인류 제국과 외계 종족, 변형된 존재들이\n끊임없이 전쟁을 벌이는 세계관입니다.",
              type: "title_desc",
              textkey: "s1_2",
            },
          ],
          button: {
            classNm: "text move gray_btn play toright_button",
            text: "more view",
            linkurl: "/portfolio/list/00010001/list",
          },
          seckey: "sec1_2",
        },
      ],
      wrpkey: "1",
    },
    {
      wrpclassnm: "section2_wrap right bottommargin",
      section: [
        {
          classnm: "section2_sub1 left0 ",
          imgurl: "",
          texts: [
            {
              classnm: "text move play toleft_title",
              text: "Warhammer Age Of Sigmar",
              type: "title",
              textkey: "s1_1",
            },
            {
              classnm: "text move play toleft_desc",
              text: "에이지 오브 시그마는 여러 차원의 신비한 세계에서\n신들과 영웅들이 악마, 언데드, 혼돈 세력과 싸우며\n영토와 권력을 다투는 판타지 전쟁 세계관입니다.",
              type: "title_desc",
              textkey: "s1_2",
            },
          ],
          button: {
            classNm: "text move gray_btn play toleft_button",
            text: "more view",
            linkurl: "/portfolio/list/00020001/list",
          },
          seckey: "sec2_1",
        },
        {
          classnm: "section2_sub toright",
          imgurl: "/imgs/main_b_02.webp",
          texts: "",
          linkurl: "/portfolio/list/00020001/list",
          button: {},
          seckey: "sec2_2",
        },
      ],
      wrpkey: "2",
    },
  ];
  return (
    <section className="w_sec_wrp" ref={textRef}>
      {secArr.map((v) => (
        <WarhammerSecDiv {...v} key={v.wrpkey} />
      ))}
    </section>
  );
};

export default WarhammerSection;
