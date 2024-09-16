import React, { useState } from "react";
import Modal from "./modalSchool";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

function School() {
  const [modalSchool, setModalSchool] = useState(false);
  const toggleModal = () => {
    setModalSchool(!modalSchool);
  };

  const style = {
    color: "black",
    backgroundColor: "cyan",
    padding: "10px",
    borderStyle: "solid",
  };
  return (
    <div style={style}>
      <div>
        <Modal modal={modalSchool} setModal={setModalSchool} />

        <div>
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
          <button className="modalSchool" onClick={() => toggleModal(false)}>
            Add School
          </button>
        </div>
      </div>
    </div>
  );
}

export default School;
