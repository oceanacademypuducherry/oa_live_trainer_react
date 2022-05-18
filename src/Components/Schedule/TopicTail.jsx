import React from "react";
import "./topic_tail.scss";

export default function TopicTail({ isActive, isCompleted, onClick }) {
  return (
    <div
      className={`tp-div ${isCompleted && "tp-completed"}`}
      onClick={isCompleted ? null : onClick}
    >
      <div className="title">
        <div
          className={`indicator ${(isActive || isCompleted) && "i-active"} `}
        >
          <div className="c-i"></div>
        </div>
        <span>Introduction to Dart</span>
      </div>
      {isCompleted && (
        <div className="resedule-btn" onClick={onClick}>
          <span>Reschedule</span>
        </div>
      )}
    </div>
  );
}
