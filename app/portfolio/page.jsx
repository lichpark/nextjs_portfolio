import ItemSection from "../components/itemSection";
import MainSlide from "../components/mainSlide";
import WarhammerSection from "../components/warhammerSection";

const page = () => {
  const itemarr = [
    {
      sectionClass: "bestitem_section",
      title: "BEST ITEM",
      subtext: "지금 가장 인기 있는 베스트 상품을 만나보세요!",
      swipearr: [
        {
          imgurl: "/imgs/product_img/ef8693a19b64e57ca74c88a1c00165c1.jpg",
          price: 75000,
          product_name: "ADEPTUS MECHANICUS: SKITARII",
          linkid: "0001",
        },
        {
          imgurl: "/imgs/product_img/7d465bd34eb6c917509b7b6f7546cde7.jpg",
          price: 61000,
          product_name: "TAU EMPIRE: PATHFINDER TEAM",
          linkid: "0002",
        },
        {
          imgurl: "/imgs/product_img/3d14df85b626804d484cf2a3881582f4.jpg",
          price: 85000,
          product_name: "THOUSAND SONS: RUBRIC MARINES",
          linkid: "0003",
        },
        {
          imgurl: "/imgs/product_img/02a0dc5c97ff2a13655c6251e07c8aa6.jpg",
          price: 68000,
          product_name: "ASTRA MILITARUM: CADIAN SHOCK TROOPS",
          linkid: "0004",
        },
        {
          imgurl: "/imgs/product_img/08c209f4ffbf1bdd0111c7ad955e84d9.jpg",
          price: 85000,
          product_name: "CHAOS SPACE MARINES: TERMINATORS",
          linkid: "0005",
        },
      ],
      gridarr: [],
      media: [],
    },
    {
      sectionClass: "preorder_section",
      title: "PRE-ORDER",
      subtext:
        "매주 월요일 새로운 전장이 열립니다! 프리오더로 최신 아이템을 놓치지 말고 먼저 손에 넣으세요.",
      swipearr: [],
      gridarr: [
        {
          imgurl: "/imgs/product_img/ef8693a19b64e57ca74c88a1c00165c1.jpg",
          price: 75000,
          product_name: "ADEPTUS MECHANICUS: SKITARII",
          linkid: "0001",
        },
        {
          imgurl: "/imgs/product_img/7d465bd34eb6c917509b7b6f7546cde7.jpg",
          price: 61000,
          product_name: "TAU EMPIRE: PATHFINDER TEAM",
          linkid: "0002",
        },
        {
          imgurl: "/imgs/product_img/3d14df85b626804d484cf2a3881582f4.jpg",
          price: 85000,
          product_name: "THOUSAND SONS: RUBRIC MARINES",
          linkid: "0003",
        },
        {
          imgurl: "/imgs/product_img/02a0dc5c97ff2a13655c6251e07c8aa6.jpg",
          price: 68000,
          product_name: "ASTRA MILITARUM: CADIAN SHOCK TROOPS",
          linkid: "0004",
        },
        {
          imgurl: "/imgs/product_img/08c209f4ffbf1bdd0111c7ad955e84d9.jpg",
          price: 85000,
          product_name: "CHAOS SPACE MARINES: TERMINATORS",
          linkid: "0005",
        },
        {
          imgurl: "/imgs/product_img/62dd757ef047987dd879ed52295ae972.jpg",
          price: 53000,
          product_name: "SLAVES TO DARKNESS: CHAOS SORCERER LORD",
          linkid: "0006",
        },
        {
          imgurl: "/imgs/product_img/63039c433acd5e38fddaf051715c0189.jpg",
          price: 150000,
          product_name: "STD: ABRAXIA SPEAR OF THE EVERCHOSEN",
          linkid: "0007",
        },
        {
          imgurl: "/imgs/product_img/bc2a0ad239b2e2ef675d9c8ff5c23e0f.jpg",
          price: 180000,
          product_name: "KILLZONE: VOLKUS",
          linkid: "0008",
        },
      ],
      meida: [],
    },
    {
      sectionClass: "media_section",
      title: "MEDIA",
      subtext:
        "Something big is about to happen in the grim darkness of the far future…\nNecrons, Imperial Guard, Space Marines and Sisters of Battle clash in this cinematic trailer.",
      swipearr: [],
      gridarr: [],
      meida: "https://www.youtube.com/embed/B9V0bOB8sXQ?si=YGc6aZsXZmoA1knq",
    },
  ];

  return (
    <section className="warp_container">
      <MainSlide />
      <WarhammerSection />
      {itemarr.map((v, idx) => (
        <ItemSection {...v} key={idx} />
      ))}
    </section>
  );
};

export default page;
