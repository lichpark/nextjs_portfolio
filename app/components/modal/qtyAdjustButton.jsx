const QtyAdjustButton = (props) => {
  return (
    <button
      type="button"
      className="qty_button"
      onClick={props.click}
      aria-controls="number"
    >
      {props.isIncrease ? "+" : "-"}
    </button>
  );
};

export default QtyAdjustButton;
