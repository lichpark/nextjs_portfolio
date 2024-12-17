import WarhammerBox from "./warhammerBox";

const WarhammerSecDiv = (props) => {
  return (
    <div className={props.wrpclassnm}>
      {props.section.map((v, idx) => (
        <WarhammerBox {...v} key={props.wrpkey + idx} />
      ))}
    </div>
  );
};

export default WarhammerSecDiv;
