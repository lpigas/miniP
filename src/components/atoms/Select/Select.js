import React from "react";

export default function Select({
  style,
  options,
  defaultOptions,
  value,
  onChange,
  styleforDef,
  disabled,
}) {
  // console.log(defaultOptions)
  return (
    <div>
      <select
        style={style}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option style={styleforDef} value="" disabled={disabled}>
          {defaultOptions}
        </option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
