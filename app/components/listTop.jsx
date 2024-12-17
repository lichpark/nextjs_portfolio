"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Texts from "./texts";
import Link from "next/link";
//animation처리

const ListTop = (props) => {
  useEffect(() => {
    // 애니메이션 초기화
    gsap.to(".list_top", {
      y: 40, // 위에서 100px 만큼 내려오게
      opacity: 1,
      duration: 2, // 2초 동안 애니메이션
      ease: "power3.out", // 부드러운 애니메이션 효과
    });
  }, []);

  return (
    <div className="list_top t_center">
      <Texts
        classnm="list_title list_t_mt bold list_t_mb"
        type=""
        text={props.firstcate}
      />
      <div className="list_sub_wrp">
        <ul className="list_sub_wrp__ul">
          {props.secondcate[props.id.slice(0, props.splcnt)].map((v) => (
            //console.log(Object.keys(v)[0])
            //console.log(v[Object.keys(v)[0]])
            <li key={props.id.slice(0, props.splcnt) + Object.keys(v)[0]}>
              <Link
                href={`/portfolio/list/${props.id.slice(0, props.splcnt)}${
                  Object.keys(v)[0]
                }/${props.type}`}
              >
                <span
                  className={
                    props.id.slice(0, props.splcnt) + Object.keys(v)[0] ==
                    props.id
                      ? "bold_cate_text"
                      : ""
                  }
                >
                  {v[Object.keys(v)[0]]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListTop;
