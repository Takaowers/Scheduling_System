import { Routes, Route } from "react-router-dom";
import Login from "../../golden-values/src/pages/login";
import Success from "../../golden-values/src/pages/successPage";
import Scheduler from "./scheduler/scheduler";
import Schedules from "./scheduler/schedules";
import School from "./scheduler/school";
const data = [
  {
    start_date: "2020-06-10 6:00",
    end_date: "2020-06-10 8:00",
    text: "Event 1",
    id: 1,
  },
  {
    start_date: "2020-06-13 10:00",
    end_date: "2020-06-13 18:00",
    text: "Event 2",
    id: 2,
  },
];

function App() {
  
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="./scheduler/school.js" element={<School />} />
        <Route path="./scheduler/scheduler.js" element={<Scheduler />} />
        <Route path="./scheduler/schedules.js.js" element={<Schedules />} />
      </Routes>
    </div>
  );
}

  
export default App;
