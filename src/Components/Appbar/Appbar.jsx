import React, { useState } from "react";
import "./appbar.scss";
import logo from "../LoginAppbar/oa.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PROFILE_PIC =
  "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
export default function Appbar({ trainerInfo }) {
  const [isPop, setIsPop] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="appbar-div">
      <div className="logo-div">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <span>ocean academy</span>
      </div>
      <div
        className="trainer-div"
        onMouseOver={() => {
          setIsPop(true);
        }}
        onMouseOut={() => {
          setIsPop(false);
        }}
      >
        <motion.div
          className="t-profile-popup-div"
          animate={{ scale: isPop ? 1 : 0 }}
          style={{ originX: "100%", originY: 0 }}
        >
          <div className="p-tabs">Notification</div>
          <div className="p-tabs">Edit Profile</div>
          <div
            className="p-tabs"
            onClick={() => {
              localStorage.removeItem("t_token");
              setIsPop(false);
              navigate("/login");
            }}
          >
            Logout
          </div>
        </motion.div>

        <div className="profilePic">
          <img
            src={
              trainerInfo.profilePicture
                ? trainerInfo.profilePicture
                : PROFILE_PIC
            }
            alt=""
          />
        </div>
        <div className="info">
          <div className="name">{trainerInfo.trainerName}</div>
          <div className="designation">{trainerInfo.designation}</div>
        </div>
        <MdKeyboardArrowDown className="ico" />
      </div>
    </div>
  );
}
