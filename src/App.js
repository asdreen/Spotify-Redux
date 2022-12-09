import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LikedMusices from "./components/LikedMusices";
import SearchBar from "./components/SearchBar";
import MusicList from "./components/MusicList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <MusicList />
              </>
            }
          />
          <Route path="/liked" element={<LikedMusices />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
