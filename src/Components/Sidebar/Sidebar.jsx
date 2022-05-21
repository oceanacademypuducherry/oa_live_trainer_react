import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ColorButton from "../Common/Widgets/colorButton";
import "./sidebar.scss";
import tabs from "./tabs";

const ACTIVE_COLOR = "#0d9ce9";
const INACTIVE_COLOR = "#9b9b9b";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <div className="side-div">
      {tabs.map((item, index) => {
        return (
          <ColorButton
            key={index}
            color={location === item.url ? ACTIVE_COLOR : INACTIVE_COLOR}
            onClick={() => {
              navigate(item.url);
            }}
          >
            {item.tabName}
          </ColorButton>
        );
      })}
    </div>
  );
}
