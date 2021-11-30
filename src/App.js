import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Stationpage from "./pages/Stationpage";
import Routepage from "./pages/Routepage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Routes basename="/BikeFun">
        <Route path="/" element={<Homepage />} />
        <Route path="/station" element={<Stationpage />} />
        <Route path="/route" element={<Routepage />} />
      </Routes>
    </div>
  );
}

export default App;
