import React from "react";

const ToastButton = ({ message }) => {
  const buttonClickHandler = (title) => {
    console.log(title);
  };
  return (
    <button
      className="toast__button"
      onClick={() => buttonClickHandler(message.title)}
    >
      Dismiss
    </button>
  );
};

export default ToastButton;
