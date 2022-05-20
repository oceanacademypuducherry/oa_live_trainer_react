import axios from "../../index";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import "./home.scss";

export default function Home() {
  const session = localStorage.getItem("t_token");
  const [trainerInfo, setTrainerInfo] = useState({});

  function getTrainerInfo() {
    axios
      .post("/trainer/get", { token: session })
      .then((res) => {
        setTrainerInfo(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (session === "undefined" || session == null) {
      navigate("/login");
    }
    getTrainerInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Appbar trainerInfo={trainerInfo} />
      <div className="content-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
