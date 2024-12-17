"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import FooterButton from "./footerButton";
import FooterInfo from "./footerInfo";
import gsap from "gsap";

const Footer = () => {
  const footerLinksArr = [
    {
      footer_top: [
        {
          classNm: "footer_links",
          buttonText: "HOME",
          linkurl: "javascript:void(0);",
        },
        {
          classNm: "footer_links",
          buttonText: "AGREEMENT",
          linkurl: "javascript:void(0);",
        },
        {
          classNm: "footer_links bold",
          buttonText: "개인정보 취급방침",
          linkurl: "javascript:void(0);",
        },
        {
          classNm: "footer_links",
          buttonText: "GUIDE",
          linkurl: "javascript:void(0);",
        },
      ],
    },
    {
      footer_aside: [
        {
          classNm: "footer_info",
          titleText: "BANK ACCOUNT",
          titleClassNm: "footer_info_title",
          infoText: [{ infoText: "우리은행", infoDesc: "1005-001-008662" }],
          infoClassNm: "footer_infos",
        },
      ],
    },
    {
      footer_info_main: [
        {
          classNm: "footer_info",
          titleText: "COMPANY INFO",
          titleClassNm: "footer_info_title",
          infoText: [
            { infoText: "COMPANY", infoDesc: "나비타월드" },
            { infoText: "OWNER", infoDesc: "최미향" },
            { infoText: "C.P.O", infoDesc: "최숙향" },
            { infoText: "E-mail", infoDesc: "info@nabita.com" },
            {
              infoText: "TEL",
              infoDesc:
                "02-2661-8856\n주문/반품/교환 문의만 가능. 이 외 문의는 게시판을 이용해 주세요.",
            },
            {
              infoText: "OPEN TIME",
              infoDesc:
                "평일 10:00 ~ 15:00\n점심 12:00 ~ 13:00 주말/공휴일 휴무",
            },
            { infoText: "ORDER LICENSE", infoDesc: "제2021-서울강서-3846호 " },
            { infoText: "BUSINESS LICENSE", infoDesc: "	105-86-84589" },
            {
              infoText: "ADDRESS",
              infoDesc:
                "07526 서울 강서구 가양동 1481-4 가양아파트형공장 비젼타워 3F 302호",
            },
          ],
          infoClassNm: "footer_infos",
        },
      ],
    },
  ];

  const tl = useRef(null);
  const textRef = useRef(null);

  const animation_up = (tl, el) => {
    tl.fromTo(
      el,
      {
        opacity: 1,
        y: 40,
        delay: 0,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "bounce.out",
        delay: 0,
      }
    );
  };

  const hidden_aside = (tl, el) => {
    tl.fromTo(
      el,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        immediateRender: false,
        delay: 0,
        duration: 0,
      }
    );
  };

  const handleScroll = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const elementHeight = rect.bottom - rect.top;
      // const isVisible =rect.top < window.innerHeight && rect.bottom > elementHeight / 2;

      const isVisible =
        rect.top <= window.innerHeight && rect.bottom > elementHeight;

      if (isVisible) {
        if (!tl.current) {
          tl.current = gsap.timeline({ repeat: 0 });
          //product 에서 구매쪽 보이고 안보이고 처리

          if (document.querySelectorAll(".product_buy_wrp").length > 0) {
            hidden_aside(tl.current, ".product_buy_wrp");
          }

          hidden_aside(tl.current, "#left");

          animation_up(tl.current, ".footer_wrap");
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

  useLayoutEffect(() => {
    handleScroll(); // DOM 초기 상태 확인
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="footer">
      <div className="footer_wrap" ref={textRef}>
        <div className="footer_top">
          <div className="footer_links_wrap">
            {footerLinksArr[0].footer_top.map((v, idx) => (
              <FooterButton {...v} key={"button" + idx} />
            ))}
          </div>
        </div>
        <div className="footer_middle">
          <div className="footer_middle_aside">
            {footerLinksArr[1].footer_aside.map((v, idx) => (
              <FooterInfo {...v} key={"aside" + idx} />
            ))}
          </div>
          <div className="footer_middle_main">
            {footerLinksArr[2].footer_info_main.map((v, idx) => (
              <FooterInfo {...v} key={"main" + idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
