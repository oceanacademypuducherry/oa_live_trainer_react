import React from "react";
import CustomButton from "../Common/Widgets/CustomButton";
import TextField from "../Common/Widgets/TextField";
import LoginAppbar from "../LoginAppbar/LoginAppbar";
import "./login.scss";

export default function Login() {
  return (
    <div className="login-div">
      <LoginAppbar />
      <div className="login-box">
        <TextField name={"mobileNumber"} placeholder={"Mobile Number"} />
        <TextField name={"otp"} placeholder={"OTP"} />
        <div className="re-otp">
          <span>Resend OTP</span>
        </div>
        <CustomButton>Login</CustomButton>
      </div>
      <div className="login-footer">copyright&#169;oceanacademy.co.in</div>
    </div>
  );
}
