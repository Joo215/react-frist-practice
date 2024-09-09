import React from "react";

const ToastButton = () => {
  const buttonClickHandler = () => {
    console.log("event occurs");
  };

  return (
    <button className="toast__button" onClick={buttonClickHandler}>
      Dismiss
    </button>
  );
};

export default ToastButton;
