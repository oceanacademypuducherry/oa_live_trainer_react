import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Appbar from "../Appbar/Appbar";
import Sidebar from "../Sidebar/Sidebar";
import "./home.scss";

export default function Home() {
  const session = localStorage.getItem("t_token");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(session);
    if (session === "undefined" || session == null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Appbar />
      <div className="content-body">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
