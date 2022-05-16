import React from "react";
import "./login_appbar.scss";
import oaLogo from "./oa.svg";

export default function LoginAppbar() {
  return (
    <div className="login-appbar">
      <div className="logo-div">
        <img src={oaLogo} alt="logo" />
        <span>Trainer</span>
      </div>
    </div>
  );
}
