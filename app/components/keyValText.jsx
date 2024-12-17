const KeyValText = (props) => {
  return (
    <>
      <div className={props.keyClass}>{props.keyText}</div>
      <div className={props.valClass}>{props.valText}</div>
    </>
  );
};

export default KeyValText;
