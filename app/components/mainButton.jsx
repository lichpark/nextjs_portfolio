import Link from "next/link";

const MainButton = (props) => {
  return (
    <div className={props.classNm}>
      <Link href={props.linkurl}>
        <span className="btn_text">{props.text}</span>
      </Link>
    </div>
  );
};

export default MainButton;
