import { Tabs } from "@radix-ui/themes";
import KeyValText from "./keyValText";
import { productBuyText } from "../data/productBuyText";
import { productexchangetext } from "../data/productexchangetext";

const ProductTab = (props) => {
  return (
    <Tabs.Root defaultValue="product_info">
      <Tabs.List highContrast>
        <Tabs.Trigger
          className="product_tab"
          value="product_info"
          justify="center"
        >
          상세정보
        </Tabs.Trigger>
        <Tabs.Trigger
          className="product_tab"
          value="size_info"
          justify="center"
        >
          사이즈 정보
        </Tabs.Trigger>
        <Tabs.Trigger
          className="product_tab"
          value=" buy_info"
          justify="center"
        >
          구매 안내
        </Tabs.Trigger>
        <Tabs.Trigger
          className="product_tab"
          value="exchange_info"
          justify="center"
        >
          교환&반품 안내
        </Tabs.Trigger>
      </Tabs.List>
      <div>
        <Tabs.Content value="product_info" className="tab_cont">
          {props.productDesc.map((v, idx) => (
            <div className="product_keyval_wrp" key={idx}>
              <KeyValText
                keyClass="product_first"
                keyText={"∙ " + v.title}
                valClass="product_second"
                valText={v.desc}
              />
            </div>
          ))}
        </Tabs.Content>

        <Tabs.Content value="size_info" className="tab_cont">
          <div className="product_keyval_wrp">
            <KeyValText
              keyClass="price_first"
              keyText="∙ 사이즈(가로X세로X높이) : "
              valClass="prict_second bold"
              valText={props.size}
            />
          </div>
        </Tabs.Content>

        <Tabs.Content value=" buy_info" className="tab_cont">
          <div>
            {productBuyText.map((v, idx) => (
              <KeyValText {...v} key={idx} />
            ))}
          </div>
        </Tabs.Content>
        <Tabs.Content value="exchange_info" className="tab_cont">
          {productexchangetext.map((v, idx) => (
            <KeyValText {...v} key={idx} />
          ))}
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default ProductTab;
