"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const KeyValTextDiv = (props) => {
  const contactRef = useRef(null);

  useEffect(() => {
    const element = contactRef.current;

    const handleMouseOver = () => {
      gsap.to(element, {
        scale: 1.2, // 크기 확대
        boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", // 그림자 효과
        duration: 0.3, // 애니메이션 지속 시간
        ease: "power2.out", // 부드러운 애니메이션
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1, // 원래 크기로 복귀
        boxShadow: "none", // 그림자 제거
        duration: 0.3,
        ease: "power2.out",
      });
    };

    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup 이벤트 리스너
    return () => {
      if (element) {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      key={props.keyval}
      className={props.wrpclasNm}
      ref={contactRef}
      style={{
        backgroundColor: "#F5EFE7",
        borderRadius: "10px",
        cursor: "pointer",
        padding: "5%",
      }}
    >
      <div className={props.keyClassNm}>{props.keyText}</div>
      {props.valText.map((v, idx) => (
        <div className={props.valClassNm} key={idx}>
          {props.valText[idx]}
        </div>
      ))}
    </div>
  );
};

export default KeyValTextDiv;
