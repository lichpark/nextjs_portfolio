import Aside_menu_li from "./aside_menu_li";
import Logo from "./logo";

const Aside_menu_ul = () => {
  const liArr = [
    {
      classNm: "login_menu",
      links: [
        { linkUrl: "/portfolio", text: "login /", key: "0" },
        { linkUrl: "/portfolio", text: "join us", key: "1" },
      ],
    },
    {
      classNm: "login_menu",
      links: [
        { linkUrl: "/portfolio", text: "mypage /", key: "2" },
        { linkUrl: "/portfolio", text: "basket", key: "3" },
      ],
    },
    {
      classNm: "cate_menu",
      links: [
        {
          linkUrl: "/portfolio/list/00010001/list",
          text: "WARHAMMER",
          key: "4",
        },
        {
          linkUrl: "/portfolio/list/00020001/list",
          text: "Age of Sigma",
          key: "5",
        },
      ],
    },
    {
      classNm: "cate_menu",
      links: [{ linkUrl: "/contact", text: "CONTACT", key: "6" }],
    },
    // {
    //   classNm: "cate_menu",
    //   links: [{ linkUrl: "/portfolio", text: "ABOUT US", key: "6" }],
    // },
    {
      classNm: "cate_menu mt20 small_menu",
      links: [{ linkUrl: "/portfolio", text: "> STORE LIST", key: "7" }],
    },
    // {
    //   classNm: "cate_menu small_menu",
    //   links: [{ linkUrl: "/portfolio", text: "> CONTACTUS", key: "8" }],
    // },
  ];
  console.log("aaa");
  return (
    <ul id="left_menu">
      <Logo />
      {liArr.map((v, idx) => (
        <Aside_menu_li {...v} key={idx} />
      ))}
    </ul>
  );
};

export default Aside_menu_ul;
