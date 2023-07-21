//import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="w-full h-full bg-indigo-500 opacity-75"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="absolute justify-center z-30">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {/* <BackDrop/>
  <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
