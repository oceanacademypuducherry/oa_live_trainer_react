import React, { useState } from "react";
import "./schedule.scss";
import TopicTail from "./TopicTail";

const TOPICS = [
  { isCompleted: true },
  { isCompleted: false },
  { isCompleted: false },
  { isCompleted: false },
  { isCompleted: false },
  { isCompleted: false },
  { isCompleted: false },
];
export default function Schedule() {
  const [shcheduleData, setScheduleData] = useState({
    classDate: "YYYY-MM-DD",
  });
  const [pickedTopic, setPickedTopick] = useState([]);
  function pickTheTopics(index) {
    if (pickedTopic.includes(index)) {
      let removeTopic = pickedTopic.filter((topic) => index !== topic);
      console.log(removeTopic);
      setPickedTopick(removeTopic);
    } else {
      setPickedTopick([...pickedTopic, index]);
    }
  }

  function onchangeHandler(e) {
    const { value, name } = e.target;
    setScheduleData({ ...shcheduleData, [name]: value });
  }
  return (
    <div className="shcedule-div">
      <div className="inner-box">
        <div className="info-div"></div>
        <div className="topic-div">
          <div className="date-picker">
            <span>Date : </span>
            <div className="d-picker">
              <span className="date">{shcheduleData.classDate}</span>
              <input type="date" name="classDate" onChange={onchangeHandler} />
            </div>
          </div>
          <div className="topic-picker">
            {TOPICS.map((item, index) => {
              return (
                <TopicTail
                  key={index}
                  isActive={pickedTopic.includes(index)}
                  isCompleted={item.isCompleted}
                  onClick={() => {
                    pickTheTopics(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
