import React from "react";
import "./Input.css";

export default function Input({
  value,
  className,
  placeholder = [""],
  onChange,
}) {
  return (
    <div>
      <div className={className}>
        <textarea
          type="text"
          cols="50"
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
