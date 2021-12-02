import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Stationpage from "./pages/Stationpage";
import Routepage from "./pages/Routepage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/BikeFun">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/station" element={<Stationpage />} />
          <Route path="/route" element={<Routepage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
