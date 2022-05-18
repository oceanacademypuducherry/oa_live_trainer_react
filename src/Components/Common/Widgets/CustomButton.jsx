import React from "react";
import "./button.scss";
export default function CustomButton({ children, onClick }) {
  return (
    <button className="c-btn" onClick={onClick}>
      {children}
    </button>
  );
}
