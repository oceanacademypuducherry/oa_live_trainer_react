import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Common/Widgets/CustomButton";
import TextField from "../Common/Widgets/TextField";
import LoginAppbar from "../LoginAppbar/LoginAppbar";
import "./login.scss";
import logoSvg from "../LoginAppbar/oa.svg";
import axios from "../../index";

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 550px)").matches
  );

  function login() {
    axios
      .post("trainer/login", { mobileNumber: mobileNumber })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("t_token", res.data.token);
        navigate("/");
      })
      .catch((error) => {
        if (error.response.data.message === "user not found") {
          navigate("/signup", { state: { mobileNumber: mobileNumber } });
        }
      });
  }

  useEffect(() => {
    window
      .matchMedia("(min-width: 550px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div className={matches ? "login-div" : "login-div-m"}>
      {matches ? <LoginAppbar /> : <div></div>}
      {!matches && (
        <>
          <div className="c c1">
            <img src={logoSvg} alt="" />
          </div>
          <div className="c c2"></div>
        </>
      )}
      <div className={matches ? "login-box" : " login-box-m"}>
        {!matches && (
          <div className="logo-div">
            <img src={logoSvg} alt="logo" />
            <span>Trainer</span>
          </div>
        )}

        <TextField
          name={"mobileNumber"}
          placeholder={"Mobile Number"}
          value={mobileNumber}
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
        />
        <TextField name={"otp"} placeholder={"OTP"} />
        <div className="re-otp">
          <span>Resend OTP</span>
        </div>
        <CustomButton onClick={login}>Login</CustomButton>
      </div>
      <div className="login-footer">copyright&#169;oceanacademy.co.in</div>
    </div>
  );
}
