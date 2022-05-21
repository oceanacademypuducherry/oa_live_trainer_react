import React from "react";
import "./schedule_card.scss";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaChevronRight, FaVideo, FaVideoSlash } from "react-icons/fa";

export default function ScheduleCard({
  dateInfo,
  isCompleted,
  onClick,
  zoomLink,
}) {
  return (
    <div
      className={`s-card-div ${isCompleted && "s-card-div-done"} `}
      onClick={onClick}
    >
      <div className="ico">
        <BsFillCalendarCheckFill />
      </div>
      <div className="s-info">
        <div className="date">
          {dateInfo.day} {dateInfo.date}, {dateInfo.month}
        </div>
        <div className="time">{dateInfo.time} PM</div>
      </div>
      <div
        className="arrow-btn"
        onClick={() => {
          window.open(zoomLink);
        }}
      >
        {isCompleted ? <FaChevronRight /> : <FaVideo />}
      </div>
    </div>
  );
}
