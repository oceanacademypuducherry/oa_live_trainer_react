import React from "react";
import "./batch_card.scss";
import { BsThreeDots } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import ColorButton from "../Common/Widgets/colorButton";
import { useNavigate } from "react-router-dom";

export default function BatchCard() {
  const navigate = useNavigate();

  return (
    <div className="bc-div">
      <div className="bc-header">
        <div className="bc-title">
          <div className="course-name">UX UI Design</div>
          <div className="bc-id">OCNUIUX</div>
        </div>
        <div className="ico">
          <BsThreeDots />
        </div>
      </div>
      <div className="bc-body">
        <div className="st-list">
          <div className="avtar-div">
            <div className="avatar">
              <img
                src={
                  "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                }
                alt=""
              />
            </div>
          </div>

          <div className="avtar-div">
            <div className="avatar">
              <img
                src={
                  "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                }
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="sc-btn">
          <ColorButton
            color={"#0081CD"}
            onClick={() => {
              navigate("/add/schedule");
            }}
          >
            Schedule
          </ColorButton>
        </div>
      </div>
      <div className="progress-div">
        <div className="percent-div">
          <span>Progress</span>
          <span>50%</span>
        </div>
        <div className="prog-shell">
          <div className="prog-done" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="bc-footer">
        <div className="fc">
          <span>06 to07 PM</span>
        </div>
        <div className="fc">
          <span>Week-Days</span>
        </div>
        <div className="fc">
          <span className="time-left">
            <AiFillClockCircle className="ico" />
            <span> 54 Hours Left</span>
          </span>
        </div>
      </div>
    </div>
  );
}
