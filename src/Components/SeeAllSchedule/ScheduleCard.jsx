import React from "react";
import "./schedule_card.scss";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaChevronRight, FaVideo, FaVideoSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ScheduleCard({
  dateInfo,
  isCompleted,
  onClick,
  zoomLink,
}) {
  const navigator = useNavigate();
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
        onClick={
          !isCompleted
            ? () => {
                navigator("/all/schedule/zoom", {
                  state: { zoomLink: zoomLink },
                });

                // window.open(zoomLink);
              }
            : null
        }
      >
        {isCompleted ? <FaChevronRight /> : <FaVideo />}
      </div>
    </div>
  );
}
