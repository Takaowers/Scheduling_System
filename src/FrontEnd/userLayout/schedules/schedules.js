import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Schedules() {
  const navigate = useNavigate();

  const style = {
    color: "black",
    backgroundColor: "cyan",
    padding: "10px",
    borderStyle: "solid",
  };


  return (
    <div style={style}>
      <Link
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        to="/success"
      >
        Home
      </Link>
      <Link
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        to="/scheduler/school"
      >
        School
      </Link>
      <Link
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        to="/scheduler/scheduler"
      >
        Scheduler
      </Link>
      <Link
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        to="/scheduler/schedules"
      >
        Schedules
      </Link>
    </div>
  );
}

export default Schedules;
