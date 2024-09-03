import React from "react";
import { RiFontFamily } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Scheduler() {
  const navigate = useNavigate();
  const style = {
    color: "black",
    backgroundColor: "cyan",
    padding: "10px",
    borderStyle: "solid",
  };
  return (
    <div style={style}>
      <button
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        onClick={() => {
          navigate("./success");
        }}
      >
        Home
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        onClick={() => {
          navigate("./school");
        }}
      >
        School
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        onClick={() => {
          navigate("./scheduler");
        }}
      >
        Scheduler
      </button>
      <button
        style={{
          color: "black",
          backgroundColor: "cyan",
          padding: "10px",
          marginLeft: "10px",
          fontFamily: "sans-serif",
          fontSize: "calc(2px + 2vmin)",
          border: "none",
        }}
        onClick={() => {
          navigate("./schedules");
        }}
      >
        Schedules
      </button>
    </div>
  );
}

export default Scheduler;
