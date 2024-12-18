"use client";
import { numbertocomma } from "@/app/function/function";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "./pagination";
import Image from "next/image";

const ListMain = (props) => {
  useEffect(() => {
    // 애니메이션 초기화
    gsap.to(".list_main", {
      y: -40, //
      opacity: 1,
      duration: 3, // 1초 동안 애니메이션
      ease: "power3.out", // 부드러운 애니메이션 효과
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const contentsPerPage = 12;

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents = props.filteredProducts
    .slice(0)
    .reverse()
    .slice(indexOfFirstContent, indexOfLastContent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="list_main">
      <div className="list_main_top">
        <div className="list_type_button">
          <Link
            href={`/portfolio/list/${props.id}/list`}
            className={
              props.type == "list" ? "typeButton list_active" : "typeButton"
            }
          >
            <Image width={200} height={200} src="/imgs/ico_thumb.png" alt="" />
          </Link>
          <Link
            href={`/portfolio/list/${props.id}/gallery`}
            className={
              props.type == "gallery" ? "typeButton list_active" : "typeButton"
            }
          >
            <Image
              width={200}
              height={200}
              src="/imgs/ico_gallery.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="list_mainlist">
        {currentContents.map((v, idx) => (
          <article key={idx}>
            <Link
              href={`/portfolio/product/${v.id}`}
              className="list_mainlist_wrp"
            >
              <figure
                className={
                  props.type == "gallery"
                    ? "list_main_list__figure_gallery"
                    : "list_main_list__figure"
                }
              >
                <Image
                  width={200}
                  height={200}
                  src={`${v.imgurl}`}
                  alt=""
                  className="list_main_list__figure__img"
                />
              </figure>
              <h4 className={props.type == "gallery" ? "disnone" : ""}>
                {v.productName}
              </h4>
              <p className={props.type == "gallery" ? "disnone" : ""}>
                {numbertocomma(v.price)} 원
              </p>
            </Link>
          </article>
        ))}
      </div>
      <div className="list_main_bottom">
        <Pagination
          currentPage={currentPage}
          totalContents={props.filteredProducts.length}
          paginate={paginate}
          contentsPerPage={contentsPerPage}
        />
      </div>
    </div>
  );
};

export default ListMain;
