import Link from "next/link";
import { numbertocomma } from "@/app/function/function";
import Image from "next/image";

const ItemCard = (props) => {
  const price = numbertocomma(props.price);

  return (
    <div className="card">
      <Link href={`./portfolio/product/${props.linkid}`} className="card__a">
        <article className="card_img_article">
          <Image
            width={200}
            height={200}
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
