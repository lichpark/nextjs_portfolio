import Link from "next/link";

const FooterButton = (props) => {
  return (
    <div>
      <Link href={props.linkurl} className={props.classNm}>
        {props.buttonText}
      </Link>
    </div>
  );
};

export default FooterButton;
