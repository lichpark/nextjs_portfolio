"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./modal/modal";
import ProductPriceDiv from "./modal/productPriceDiv";

const ProductBuy = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    // DOM이 클라이언트에서만 접근 가능한 점을 처리
    const root = document.getElementById("modal-root");
    setModalRoot(root);
  }, []);

  useEffect(() => {
    // 모달 상태에 따른 스타일 조작
    if (modalRoot) {
      if (showModal) {
        const pageWidth = document.documentElement.scrollWidth;
        //const pageHeight = document.documentElement.scrollHeight;
        const pageHeight = document.documentElement.offsetHeight;

        modalRoot.style.width = `${pageWidth}px`;
        modalRoot.style.height = `${pageHeight}px`;
        modalRoot.style.position = "absolute";
        modalRoot.style.top = "0";

        const scrollHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        console.log(scrollHeight);
        const scrolldown = () => {
          window.scrollTo({
            top: scrollHeight,
            behavior: "smooth",
          });
        };
        setTimeout(() => {
          requestAnimationFrame(scrolldown);
        }, 300);
      } else {
        modalRoot.style.width = "0";
        modalRoot.style.height = "0";
        modalRoot.style.position = "inherit";
        modalRoot.style.top = "";
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 300);
      }
    }
  }, [showModal, modalRoot]);

  return (
    <>
      <div className="product_buy_wrp">
        <Link
          href="#"
          className="product_buy_button"
          onClick={() => setShowModal(true)}
        >
          {Number(props.amount) > 0 ? "구매하기" : "품절"}
        </Link>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ProductPriceDiv
            title={props.title}
            price={props.price}
            bonus={props.bonus}
            amount={props.amount}
          />
        </Modal>
      )}
    </>
  );
};

export default ProductBuy;
