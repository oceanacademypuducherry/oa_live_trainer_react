import React from "react";

import "./appbar.scss";
import logo from "../LoginAppbar/oa.svg";
import pic from "../SignUp/profile oil.png";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Appbar() {
  return (
    <div className="appbar-div">
      <div className="logo-div">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <span>ocean academy</span>
      </div>
      <div className="trainer-div">
        <div className="profilePic">
          <img src={pic} alt="" />
        </div>
        <div className="info">
          <div className="name">Thamizharasan</div>
          <div className="designation">Full-Stack Developer</div>
        </div>
        <MdKeyboardArrowDown className="ico" />
      </div>
    </div>
  );
}
