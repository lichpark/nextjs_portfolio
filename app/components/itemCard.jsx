import Link from "next/link";
import { numbertocomma } from "@/app/function/function";

const ItemCard = (props) => {
  const price = numbertocomma(props.price);

  return (
    <div className="card">
      <Link
        href={`./portfolio/product/${props.linkid}`}
        style={{ width: "100%", height: "100%" }}
      >
        <article className="card_img_article">
          <img
            className="card_img"
            src={props.imgurl}
            alt={props.product_name}
          />
        </article>
        <div className="card_product">{props.product_name}</div>
        <div className="card_price">{price} 원</div>
      </Link>
    </div>
  );
};

export default ItemCard;
