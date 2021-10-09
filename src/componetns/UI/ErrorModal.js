import React from 'react'
import "./ErrorModal.css";
function ErrorModal(props) {
    return (
        <div className="modal">
            <header>
                <h2>{props.title}</h2>
            </header>
            <p>{props.message}</p>
            <footer><button>okay</button></footer>
        </div>
    )
}

export default ErrorModal
