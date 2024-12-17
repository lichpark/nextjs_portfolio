"use client";
import { numbertocomma } from "@/app/function/function";
import QtyAdjustButton from "./qtyAdjustButton";
import { useState } from "react";

const ProductPriceDiv = (props) => {
  const price = numbertocomma(props.price);
  const bonus = numbertocomma(props.bonus);

  const [orderAmount, setOrderAmount] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);
  const [orderBonus, setOrderBonus] = useState(0);

  const changeProduct = (flag) => {
    setOrderAmount((prev) => {
      const newAmount = flag === "-" ? (prev > 0 ? prev - 1 : 0) : prev + 1;

      // Update dependent states
      setOrderPrice(numbertocomma(newAmount * props.price));
      setOrderBonus(numbertocomma(newAmount * props.bonus));

      return newAmount; // Return the updated amount
    });
  };

  const Purchase = () => {
    if (props.amount) {
      if (orderAmount == 0) {
        return alert("구매개수를 선택하지 않았습니다.");
      } else {
        return alert("포폴용 사이트라 구매가 되지 않습니다.");
      }
    } else {
      return alert("품절되었습니다.");
    }
  };

  return (
    <div className="ProductPriceDiv">
      <div className="ProductPriceDiv_adj">
        <div className="product_first">
          <div className="product_title">{props.title}</div>
          <div>
            <QtyAdjustButton
              isIncrease={false}
              click={(e) => changeProduct("-")}
            />
            <input
              type="number"
              value={orderAmount}
              className="productdiv_input"
              readOnly
            />
            <QtyAdjustButton
              isIncrease={true}
              click={(e) => changeProduct("+")}
            />
          </div>
        </div>
        <div className="product_price_info">
          <div>{price} 원</div>

          <div>(적립금: 개당 {bonus} 원)</div>
        </div>
      </div>
      <div className="productModalprice">
        <div className="total_price_wrap">
          Total: 금액: <span className="totalprice__span"> {orderPrice}</span>원
        </div>
        <div>
          총 적립금: <span className="totalprice__span"> {orderBonus}</span>원
        </div>
        <div className="total_count_wrap">
          (<span className="total_count_span">{orderAmount}</span>개)
        </div>
      </div>
      <div className="perchase_fin_wrp">
        <button
          className={props.amount ? "purchase_fin" : "empty_fin"}
          onClick={() => Purchase()}
        >
          {props.amount ? "구매" : "품절"}
        </button>
      </div>
    </div>
  );
};

export default ProductPriceDiv;
