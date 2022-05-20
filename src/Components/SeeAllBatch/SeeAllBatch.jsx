import React, { useEffect, useState } from "react";
import BatchCard from "./BatchCard";
import "./see_all_batch.scss";
import axios from "../../index";

export default function SeeAllBatch() {
  const [allBatch, setAllBatch] = useState([]);

  function getAllBatch() {
    axios
      .post("schedule/batch", { token: localStorage.getItem("t_token") })
      .then((res) => {
        console.log(res.data);
        setAllBatch(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllBatch();
  }, []);
  return (
    <div className="all-batch-div">
      {allBatch.map((batch, index) => {
        return <BatchCard key={index} batch={batch} />;
      })}
    </div>
  );
}
