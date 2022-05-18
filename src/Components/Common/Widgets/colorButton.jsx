import React from "react";
import "./color_button.scss";

export default function ColorButton({ children, onClick, color, style }) {
  return (
    <div className="color-btn" onClick={onClick}>
      <div className="btn-bg" style={{ background: color }}></div>
      <span style={{ color: color }}>{children}</span>
    </div>
  );
}
