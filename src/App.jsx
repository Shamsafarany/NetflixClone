import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Shows from "./Pages/Shows";
import Movies from "./Pages/Movies";
import List from "./Pages/List";
import Search from "./Pages/Search";
import { MovieProvider } from "./Context/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MovieProvider>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/favorites" element={<List />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
