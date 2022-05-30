import React from "react";
import "./ModalInput.css";

export default function ModalInput({
  children,
  visible,
  setVisible,
  pass = false,
}) {
  const changeClasses = ["MyModal"];

  if (visible) {
    changeClasses.push("active");
  }

  return (
    <div className={changeClasses.join(" ")} onClick={() => setVisible(pass)}>
      <div
        className={pass ? "MyModalContentPass" : "MyModalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
