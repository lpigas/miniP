import React from "react";

export default function buttonAll({ value, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {value}{" "}
    </button>
  );
}
