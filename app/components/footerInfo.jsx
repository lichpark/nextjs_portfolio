import KeyValText from "./keyValText";

const FooterInfo = (props) => {
  return (
    <div className={props.classNm}>
      <div className={props.titleClassNm}>{props.titleText}</div>
      {props.infoText.map((v, idx) => (
        <div className={props.infoClassNm} key={idx}>
          <KeyValText
            keyClass="footer_infos_first"
            keyText={v.infoText}
            valClass="footer_infos_second"
            valText={v.infoDesc}
          />
        </div>
      ))}
    </div>
  );
};

export default FooterInfo;
