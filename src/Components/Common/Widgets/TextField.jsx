import React from "react";
import "./textfields.scss";
export default function TextField({
  value,
  onChange,
  name,
  type,
  placeholder,
}) {
  return (
    <div className="inp-div">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
