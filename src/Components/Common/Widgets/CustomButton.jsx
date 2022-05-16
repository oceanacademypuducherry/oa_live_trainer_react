import React from "react";
import "./button.scss";
export default function CustomButton({ children }) {
  return <button className="c-btn">{children}</button>;
}
