import React from "react";
import "./Input.css";

export default function Input({ value, className, placeholder = [""], onChange }) {
    console.log(className)
  return (
    <div>
      <div className={className}>
        <input className={className} placeholder={placeholder} onChange={onChange} value={value} />
      </div>
    </div>
  );
}
