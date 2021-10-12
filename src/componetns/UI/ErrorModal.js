import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

// dividing the overlay in 2 functional comp
const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <h2 className="title">{props.title}</h2>
      <p>{props.message}</p>
      <button className="button" onClick={props.onRemoval}>
        okay
      </button>
    </div>
  );
};

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onRemoval={props.onRemoval}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default ErrorModal;
