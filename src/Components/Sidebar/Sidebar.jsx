import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColorButton from "../Common/Widgets/colorButton";
import "./sidebar.scss";
import tabs from "./tabs";

const ACTIVE_COLOR = "#0d9ce9";
const INACTIVE_COLOR = "#9b9b9b";

export default function Sidebar() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="side-div">
      {tabs.map((item, index) => {
        return (
          <ColorButton
            key={index}
            color={index === activeTab ? ACTIVE_COLOR : INACTIVE_COLOR}
            onClick={() => {
              setActiveTab(index);
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
