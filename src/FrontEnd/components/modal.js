import React from "react";
import modal from "../css/modal.css";
import { RiCloseLine } from "react-icons/ri";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";



function Modal({ modal, setModal }) {
  if (!modal) return null;
  return (
    <div className="parent-wrapper-modal">
      <div className="modalchild">
        <div className={""}>
          <h5 className={""}>Create Lesson</h5>
        </div>
        <div className={""}>Are you sure you want to delete the item?</div>
        <div className={""}>
          <button className={""} onClick={() => setModal(false)}>
            Add Class
          </button>
          <button className={""} onClick={() => setModal(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

