import axios from "../../index";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./schedule.scss";
import TopicTail from "./TopicTail";

export default function Schedule() {
  const batch = useLocation().state;
  const navigate = useNavigate();
  const [shcheduleData, setScheduleData] = useState({
    classDate: "YYYY-MM-DD",
    pickedTopicIndex: [],
    pickedTopic: [],
  });

  function pickTheTopics(index, pTopic) {
    if (shcheduleData.pickedTopicIndex.includes(index)) {
      let removeTopicIndex = shcheduleData.pickedTopicIndex.filter(
        (pIndex) => index !== pIndex
      );
      let removeTopic = shcheduleData.pickedTopic.filter(
        (topic) => pTopic !== topic
      );

      setScheduleData({
        ...shcheduleData,
        pickedTopicIndex: removeTopicIndex,
        pickedTopic: removeTopic,
      });
    } else {
      let pktIndex = shcheduleData.pickedTopicIndex;
      let pkt = shcheduleData.pickedTopic;
      pktIndex.push(index);
      pkt.push(pTopic);
      setScheduleData({ ...shcheduleData, pickedTopicIndex: pktIndex });
      setScheduleData({ ...shcheduleData, pickedTopic: pkt });
    }
  }

  function onchangeHandler(e) {
    const { value, name } = e.target;
    setScheduleData({ ...shcheduleData, [name]: value });
  }

  function addSchedule() {
    let bodyData = {
      batchId: batch._id,
      courseId: batch.courseId,
      trainer: batch.trainer,
      zoomLink: "https://zoom.us/",
      topicIndex: shcheduleData.pickedTopicIndex,
      topic: `${shcheduleData.pickedTopic}`,
      isJoin: false,
      batchType: batch.batchType,
      batchTime: batch.batchTime,
      recordedVideo: "",
      classDate: shcheduleData.classDate,
      users: batch.users,
      token: localStorage.getItem("t_token"),
    };
    axios
      .post("/schedule/add/", bodyData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }
  return (
    <div className="shcedule-div">
      <div className="inner-box">
        <div className="info-div">
          <div className="title">
            <div className="b-name">{batch.batchName}</div>
            <div className="c-id">{batch.courseId}</div>
          </div>
          <div
            className="progres-div"
            progress-value={batch.courseProgress}
            style={{
              background: `conic-gradient(
          #0ea86b 0deg,
          #0ea86b ${(batch.courseProgress * 360) / 100}deg,
          #f2f3f7 0deg,
          #f2f3f7 0deg
        )`,
            }}
          ></div>
          <div className="selected-topic-div">
            <div className="class-date">{shcheduleData.classDate} 06-07 PM</div>
            <div className="picked-topics">
              {shcheduleData.pickedTopic.map((topic, index) => {
                return (
                  <span className="topics" key={index}>
                    {topic},
                  </span>
                );
              })}
            </div>
          </div>
          <div className="sc-btn" onClick={addSchedule}>
            <span>Schedule</span>
          </div>
        </div>
        {/* topic div */}
        <div className="topic-div">
          <div className="date-picker">
            <span>Date : </span>
            <div className="d-picker">
              <span className="date">{shcheduleData.classDate}</span>
              <input type="date" name="classDate" onChange={onchangeHandler} />
            </div>
          </div>
          <div className="topic-picker">
            {batch.syllabus.map((item, index) => {
              let pt = shcheduleData.pickedTopicIndex;

              return (
                <TopicTail
                  key={index}
                  isActive={pt.includes(index)}
                  isCompleted={item.isCompleted}
                  topic={item.topic}
                  onClick={() => {
                    pickTheTopics(item.index, item.topic);
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
