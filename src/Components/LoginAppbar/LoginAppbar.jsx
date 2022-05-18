import React from "react";
import "./login_appbar.scss";
import oaLogo from "./oa.svg";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function LoginAppbar({ isSignUp }) {
  const navigate = useNavigate();
  return (
    <div className="login-appbar">
      {isSignUp && (
        <div
          className="icon"
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
        </div>
      )}
      <div className="logo-div">
        <img src={oaLogo} alt="logo" />
        <span>Trainer</span>
      </div>
    </div>
  );
}
