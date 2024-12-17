import { category } from "@/app/data/category";
import { productData } from "@/app/data/productData";

import ListTop from "@/app/components/listTop";
import ListMain from "@/app/components/listMain";

const page = async ({ params }) => {
  const { id } = await params;
  const { type } = await params;

  const splcnt = 4;

  //id에 맞는 정보들을 가져온다.
  const firstcate = category[0].firstCategory.find(
    (item) => item[id.slice(0, splcnt)]
  )[id.slice(0, splcnt)];

  const secondcate = category[1].secondCategory.find(
    (item) => item[id.slice(0, splcnt)]
  );

  const filteredProducts = productData.filter(
    (product) => product.category.slice(0, splcnt * 2) === id
  );

  return (
    <section className="warp_container">
      <div className="listWrp ">
        <ListTop
          firstcate={firstcate}
          secondcate={secondcate}
          id={id}
          splcnt={splcnt}
          type={type}
        />
        <ListMain id={id} filteredProducts={filteredProducts} type={type} />
      </div>
    </section>
  );
};

export default page;
