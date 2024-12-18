import Image from "next/image";
import Link from "next/link";

const WarhammerBox = (props) => {
  if (props.linkurl) {
    return (
      <div className={props.classnm}>
        <Link href={props.linkurl}>
          <Image
            width={300}
            height={300}
            src={`${props.imgurl}`}
            alt={props.texts}
            quality={100}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={props.classnm}>
        <h3 className={props.texts[0].classnm}>{props.texts[0].text}</h3>
        <p className={props.texts[1].classnm}>{props.texts[1].text}</p>
        <div className={props.button.classNm}>
          <Link href={props.button.linkurl}>
            <span className="btn_text_small">{props.button.text}</span>
          </Link>
        </div>
      </div>
    );
  }
};

export default WarhammerBox;
