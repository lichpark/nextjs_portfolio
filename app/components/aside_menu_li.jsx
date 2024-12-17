import Link from "next/link";

const Aside_menu_li = (props) => {
  return (
    <li className={props.classNm}>
      {props.links.map((v) => (
        <Link href={v.linkUrl} key={v.key}>
          {v.text}
        </Link>
      ))}
    </li>
  );
};

export default Aside_menu_li;
