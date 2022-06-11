import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./zoomPage.scss";

export default function ZoomPage() {
  const iframeRefDiv = useRef();
  const state = useLocation().state;
  // console.log(state);
  function iframeControll() {
    const zoomIframe = iframeRefDiv.current;

    zoomIframe.sandbox =
      "allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
    zoomIframe.allow = "microphone; camera; fullscreen;";
  }

  useEffect(() => {
    iframeControll();
  }, []);
  return (
    <div className="zoom-page-div">
      <div className="oa-bg-div">
        <div className="zoom-div">
          <iframe
            className="i-f"
            ref={iframeRefDiv}
            src={state.zoomLink}
            title="zoom"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
