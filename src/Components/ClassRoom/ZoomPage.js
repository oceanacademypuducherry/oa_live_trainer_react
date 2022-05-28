import React from "react";
import { useLocation } from "react-router-dom";
import "./zoomPage.scss";

export default function ZoomPage() {
  const state = useLocation().state;
  console.log(state);
  return (
    <div className="zoom-page-div">
      <div className="oa-bg-div">
        <div className="zoom-div">
          <iframe className="i-f" src={state.zoomLink} title="zoom"></iframe>
        </div>
      </div>
    </div>
  );
}
