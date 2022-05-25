import React from "react";

export default function InputPassword({
  type,
  placeholder,
  className,
  onChange,
  value,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
