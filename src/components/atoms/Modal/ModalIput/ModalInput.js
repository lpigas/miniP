import React from 'react'
import './ModalInput.css'

export default function ModalInput({ children, visible, setVisible }) {
    console.log(children)
    const changeClasses = ["MyModal"];

  if (visible) {
    changeClasses.push("active");
  }
  return (
    <div className={changeClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="MyModalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}