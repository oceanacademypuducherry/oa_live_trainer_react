import axios from "../../index";
import React, { useEffect, useState } from "react";
import "./all_schedule.scss";
import ScheduleCard from "./ScheduleCard";

const MONTH_LIST = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default function SeeAllSchedule() {
  const [allSchedule, setAllSchedule] = useState([]);
  const [allBatches, setAllBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState("");
  function getAllSchedule() {
    axios
      .post("schedule/all", { token: localStorage.getItem("t_token") })
      .then((res) => {
        console.log(res.data.courseIds);
        setAllBatches(res.data.courseIds);
        setSelectedBatch(res.data.courseIds[0]);
        setAllSchedule(res.data.schedules);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllSchedule();
  }, []);
  return (
    <div className="all-schedule-top-bar">
      <div className="topbar">
        <select
          onChange={(e) => {
            setSelectedBatch(e.target.value);
          }}
        >
          {allBatches.map((item, key) => {
            return (
              <option value={item} key={key}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="all-schedule-div">
        {allSchedule.map((schedule, index) => {
          const fullDate = new Date(schedule.classDate);
          const dateObject = {
            day: DAY[fullDate.getDay()],
            month: MONTH_LIST[fullDate.getMonth()],
            date: fullDate.getDate(),
            time: schedule.batchTime,
          };

          return schedule.courseId === selectedBatch ? (
            <ScheduleCard
              key={index}
              dateInfo={dateObject}
              isCompleted={schedule.isCompleted}
            />
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
}
