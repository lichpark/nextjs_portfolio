import ProductBuy from "@/app/components/productBuy";
import ProductSwiper from "@/app/components/productSwiper";
import ProductTab from "@/app/components/productTab";
import Texts from "@/app/components/texts";
import { productData } from "@/app/data/productData";
import { numbertocomma } from "@/app/function/function";

export const metadata = {
  title: "product page",
  description: "products page",
};
const page = async ({ params }) => {
  const { id } = await params;
  const bonusratio = 0.1;
  //object에서 찾는다.
  const productInfo = productData.find((product) => product.id === id);
  //찾은값을 뿌려준다.
  const price = numbertocomma(productInfo.price);

  return (
    <section className="product_wrap">
      <ProductSwiper imgs={productInfo.imgurl} />

      <div className="product_text_wrap">
        <Texts classnm="product_name" type="" text={productInfo.productName} />
        <Texts classnm="product_price" type="" text={price + "원"} />
      </div>
      <div className="product_tab_wrap">
        <ProductTab
          productDesc={productInfo.product_desc}
          size={productInfo.size}
        />
      </div>
      <div>
        <ProductBuy
          amount={productInfo.amount}
          title={productInfo.productName}
          price={productInfo.price}
          bonus={Number(productInfo.price) * bonusratio}
        />
      </div>
    </section>
  );
};

export default page;
