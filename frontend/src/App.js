import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SongState from "./context/SongState";
import BottomBar from "./components/BottomBar";
import SoundCloudTracks from "./components/Soundfetch_1/SoundCloudTracks";
import Search from "./components/Search";

function App() {
  return (
    <>
      <SongState>
        <Router>
          <div className="flex h-[calc(100vh-theme(space.24))]">
            <Sidebar />
            {/* <App1/> */}
            {/* <Content/> */}
            <Routes>
              <Route exact path="/" element={<SoundCloudTracks />}></Route>

              <Route exact path="/search" element={<Search />}></Route>
            </Routes>
          </div>
          <BottomBar />
        </Router>
      </SongState>
    </>
  );
}

export default App;
