import React from "react";

export default function Select({
  style,
  options,
  defaultOptions,
  value,
  onChange,
  styleforDef,
}) {
  return (
    <div>
      <select
        style={style}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option style={styleforDef} value="" disabled>
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
