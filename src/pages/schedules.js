import React from "react";
import { useNavigate } from "react-router-dom";

function Schedules() {
  const navigate = useNavigate();

  
    

  return (
    <div >
      <button
        onClick={() => {
          navigate("./success");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("./school");
        }}
      >
        School
      </button>
      <button
        onClick={() => {
          navigate("./scheduler");
        }}
      >
        Scheduler
      </button>
    </div>
  );
}

export default Schedules;
