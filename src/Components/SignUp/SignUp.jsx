import React, { useEffect, useState } from "react";
import CustomButton from "../Common/Widgets/CustomButton";
import TextField from "../Common/Widgets/TextField";
import LoginAppbar from "../LoginAppbar/LoginAppbar";
import "./signup.scss";
import "../Login/login.scss";
import { useLocation, useNavigate } from "react-router-dom";

import firebaseStorage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import oaLogo from "../LoginAppbar/oa.svg";
import axios from "../../index";

export default function SignUp() {
  const state = useLocation().state;
  const navigate = useNavigate();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 550px)").matches
  );
  const [uploadPercent, setUploadPercent] = useState("upload Profile");

  const [trainerInfo, setTrainerInfo] = useState({
    mobileNumber: state ? state.mobileNumber : "",
    trainerName: "",
    designation: "",
    email: "",
    profilePicture: "",
    skills: "",
  });
  function inputHandler(e) {
    const { value, name, type, files } = e.target;

    if (type === "file") {
      setTrainerInfo({ ...trainerInfo, [name]: "" });
      imageUpload(files[0], "trainerImage", name);
    } else {
      setTrainerInfo({ ...trainerInfo, [name]: value });
    }
  }
  function imageUpload(img, path, fieldName) {
    const storageRef = ref(firebaseStorage, path + "/" + img.name);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadPercent(progress.toFixed(0) + "%");
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setTrainerInfo({ ...trainerInfo, [fieldName]: downloadURL });
        });
      }
    );
  }

  function fileUpload() {
    let fileInp = document.querySelector("#fileinp");
    console.log(fileInp);
    fileInp.type = "file";
    fileInp.style.display = "none";
    fileInp.click();
  }

  function signUpTrainer() {
    let skills = trainerInfo.skills.split(",").map((item) => item.trim());
    const uploadTrainerInfo = trainerInfo;
    uploadTrainerInfo.skills = skills;
    console.log(uploadTrainerInfo);
    axios
      .post("/trainer/create/", uploadTrainerInfo)
      .then((res) => {
        return res.data.mobileNumber;
      })
      .then((res) => {
        console.log(res);
        axios
          .post("trainer/login", { mobileNumber: res })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("t_token", res.data.token);
            navigate("/");
          })
          .catch((e) => {
            console.log("try again later");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    window
      .matchMedia("(min-width: 550px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div className={matches ? "sign sign-div" : "sign sign-div-m"}>
      {matches && <LoginAppbar isSignUp={true} />}
      <input
        id="fileinp"
        type="hidden"
        name="profilePicture"
        onChange={inputHandler}
      />
      {!matches && (
        <div className="top-bar">
          <div className="profile-pic" onClick={fileUpload}>
            {trainerInfo.profilePicture ? (
              <img src={trainerInfo.profilePicture} alt="profile-pic" />
            ) : (
              <p className="perc">{uploadPercent}</p>
            )}
          </div>

          <div className="logo-div">
            <img src={oaLogo} alt="logo" />
            <span>Trainer</span>
          </div>
        </div>
      )}
      <div className={matches ? "box sign-box" : " box sign-box-m"}>
        {matches && (
          <div className="profile-pic" onClick={fileUpload}>
            {trainerInfo.profilePicture ? (
              <img src={trainerInfo.profilePicture} alt="profile-pic" />
            ) : (
              <p className="perc">{uploadPercent}</p>
            )}
          </div>
        )}
        <TextField
          name={"trainerName"}
          placeholder={"Trainer Name"}
          value={trainerInfo.trainerName}
          onChange={inputHandler}
        />
        <TextField
          name={"designation"}
          placeholder={"Designation"}
          value={trainerInfo.designation}
          onChange={inputHandler}
        />
        <TextField
          name={"email"}
          placeholder={"Email"}
          value={trainerInfo.email}
          onChange={inputHandler}
        />
        <TextField
          name={"mobileNumber"}
          placeholder={"Mobile Number"}
          value={trainerInfo.mobileNumber}
          onChange={inputHandler}
          readOnly={true}
        />
        <TextField
          name={"skills"}
          placeholder={"Skills: html, css, etc..."}
          value={trainerInfo.skills}
          onChange={inputHandler}
        />

        <CustomButton onClick={signUpTrainer}>SingUp</CustomButton>
      </div>
      {matches && (
        <div className="login-footer">copyright&#169;oceanacademy.co.in</div>
      )}
    </div>
  );
}
