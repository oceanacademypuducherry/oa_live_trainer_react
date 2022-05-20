import React from "react";
import "./batch_card.scss";
import { BsThreeDots } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import ColorButton from "../Common/Widgets/colorButton";
import { useNavigate } from "react-router-dom";

export default function BatchCard({ batch }) {
  const navigate = useNavigate();

  return (
    <div className="bc-div">
      <div className="bc-header">
        <div className="bc-title">
          <div className="course-name">{batch.course.courseName}</div>
          <div className="bc-id">{batch.courseId}</div>
        </div>
        <div className="ico">
          <BsThreeDots />
        </div>
      </div>
      <div className="bc-body">
        <div className="st-list">
          {batch.users.map((user, index) => {
            return (
              <div key={index} className="avtar-div">
                <div className="avatar">
                  <img src={user.profilePicture} alt="" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="sc-btn">
          <ColorButton
            color={"#0081CD"}
            onClick={() => {
              navigate("/add/schedule", { state: batch });
            }}
          >
            Schedule
          </ColorButton>
        </div>
      </div>
      <div className="progress-div">
        <div className="percent-div">
          <span>Progress</span>
          <span>{batch.courseProgress}%</span>
        </div>
        <div className="prog-shell">
          <div
            className="prog-done"
            style={{ width: `${batch.courseProgress}%` }}
          ></div>
        </div>
      </div>
      <div className="bc-footer">
        <div className="fc">
          <span>{batch.batchTime} PM</span>
        </div>
        <div className="fc">
          <span>{batch.batchType}</span>
        </div>
        <div className="fc">
          <span className="time-left">
            <AiFillClockCircle className="ico" />
            <span> {batch.course.duration} Hours</span>
          </span>
        </div>
      </div>
    </div>
  );
}
