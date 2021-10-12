import React from "react";
import "./ErrorModal.css";
function ErrorModal(props) {
  return (
    <div className="backdrop">
      <div className="modal">
          <h2 className="title">{props.title}</h2>
    
        <p>{props.message}</p>

          <button className="button" onClick={props.onRemoval}>okay</button>
    
      </div>
    </div>
  );
}

export default ErrorModal;
