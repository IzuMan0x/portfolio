//import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="absolute w-full h-full bg-purple-600 opacity-75"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="z-30">
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return ReactDOM.createPortal(
    <div className="relative w-screen h-screen flex items-center justify-center z-10">
      <BackDrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </div>,
    portalElement
  );
};

export default Modal;
