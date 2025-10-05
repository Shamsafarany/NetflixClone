import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Shows from "./Pages/Shows";
import Movies from "./Pages/Movies";
import List from "./Pages/List";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/list" element={<List/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
