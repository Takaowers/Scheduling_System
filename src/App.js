import { Routes, Route } from "react-router-dom";
import Login from "../../golden-values/src/pages/login";
import Success from "../../golden-values/src/pages/successPage";
import Scheduler from "./scheduler/scheduler";
import Schedules from "./scheduler/schedules";
import School from "./scheduler/school";

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
