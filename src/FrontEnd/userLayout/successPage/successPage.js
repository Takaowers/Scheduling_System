import { useState } from "react";
import { Calendar } from "@fullcalendar/core"; // eto url yung naka "..."
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../components/modal";
import Login from "../landingPage/login";
import { useNavigate } from "react-router-dom";
import NavBarScheduler from "../NavBarScheduler/NavBarScheduler";
import School from "../school/school";
import Schedules from "../schedules/schedules";

// npm i react-icons
// install mo lahat supabase nasa login yung url
// peti yong full calendar yung url lang din

function Success() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [state, setState] = useState([
    { id: 1, title: "event 1", date: "2024-08-08" },
  ]);

  console.log(state);
  const handleClick = (arg) => {};

  const handleDateClick = (arg) => {
    setModal(!modal);
  };

  

  const handleEventClick = () => {
    alert(true);
  };

  return (
    <div id="calendar">
      <Modal modal={modal} setModal={setModal} />
      <NavBarScheduler />
      
      <FullCalendar
        className="fullcalendar"
        
        customButtons={{
          custom1: {
            text: "Add lesson",
            click: function () {
              setModal(!modal);
            },
            themeButtonIcons: {
              prev: "fa fa-caret-left",
              next: "fa fa-caret-right",
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
          left: "custom1",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay prev next",
          themeButtonIcons: "",
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
