import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleWrapperClick = (e) => {
    e.stopPropagation(); // 이벤트 전파를 차단
  };

  const modalContent = (
    <div className="modal-overlay" onClick={handleCloseClick}>
      {/* Wrap the whole Modal inside the newly created StyledModalWrapper
        and use the ref */}
      <div className="modal-wrapper" onClick={handleWrapperClick}>
        <div className="modal">
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;
