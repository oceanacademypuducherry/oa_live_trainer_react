import React from "react";
import "./schedule_card.scss";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

export default function ScheduleCard() {
  return (
    <div className="s-card-div">
      <div className="ico">
        <BsFillCalendarCheckFill />
      </div>
      <div className="s-info">
        <div className="date">Friday 77, May</div>
        <div className="time">06-07 PM</div>
      </div>
      <div className="arrow-btn">
        <FaChevronRight />
      </div>
    </div>
  );
}
