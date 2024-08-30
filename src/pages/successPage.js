import { useState } from "react";
import { Calendar } from "@fullcalendar/core"; // eto url yung naka "..."
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../components/modal";
import Login from "./login";
import Scheduler from "../scheduler/scheduler";

// npm i react-icons
// install mo lahat supabase nasa login yung url
// peti yong full calendar yung url lang din

function Success() {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState([
    { id: 1, title: "event 1", date: "2024-08-08" },
  ]);
  console.log(state);
  const handleClick = () => {};
  const handleDateClick = (arg) => {};
  const handleEventClick = () => {
    alert(true);
  };

  return (
    <div id="calendar">
      <Modal modal={modal} setModal={setModal} />

      <FullCalendar
        className="fullcalendar"
        customButtons={{
          custom1: {
            text: "Add lesson",
            click: function () {
              setModal(!modal);
            },
          },
          custom2: {
            text: "School",
            click: function () {},
          },
          custom3: {
            text: "Scheduler",
            click: function () {},
          },
          custom4: {
            text: "Schedules",
            click: function () {},
          },
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "custom2 custom3 custom4",
          center: "title",
          right: "custom1,dayGridMonth,timeGridWeek,timeGridDay prev next",
        }}
        height={900}
        hiddenDays={[0, 6]}
        events={state}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
      />
    </div>
  );
}

export default Success;
