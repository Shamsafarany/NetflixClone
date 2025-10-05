import { useState, useEffect } from "react";
import img from "../assets/icons8-netflix (1).svg";
import "../styles/navBar.css";
import search from "../assets/icons8-search (2).svg";
import send from "../assets/icons8-send-48.png";
import closeIcon from "../assets/icons8-close-50.png";
import Grid from "../Components/Grid";
import { searchMovies } from "../Services/api";
import { Link } from "react-router-dom";

function NavBar({ type = "default" }) {
  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleInput(e) {
    if (e.target.value === "") {
      return;
    }
    setSearchQuery(e.target.value.trim());
  }

  function handleShowInput() {
    setShowInput(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
    setSearchQuery("");
  }
  function handleClearInput() {
    setSearchQuery("");
    setShowInput(false);
  }

  return (
    <>
      <nav className={`navBar ${scrolled ? "scrolled" : ""}`}>
        {type === "default" ? (
          <>
            <div className="cont1">
              <img src={img} alt="logo" className="logo" />
              <ul>
                <Link to="/" className="li">
                  Home
                </Link>
                <Link to="/login" className="li">
                  Login
                </Link>
                <Link
                  to="/shows"
                  className={`li ${
                    location.pathname === "/shows" ? "activeBar" : ""
                  }`}
                >
                  TV Shows
                </Link>
                <Link
                  to="/movies"
                  className={`li ${
                    location.pathname === "/movies" ? "activeBar" : ""
                  }`}
                >
                  Movies
                </Link>
                <Link to="/list" className="li">
                  List
                </Link>
              </ul>
            </div>
            <div className="cont2">
              {showInput ? (
                <>
                  <form className="searchForm">
                    <div className="wrapper">
                      <input
                        type="text"
                        placeholder="Search for shows..."
                        onChange={handleInput}
                        value={searchQuery}
                        autoFocus
                      />
                      <img
                        src={closeIcon}
                        alt="close"
                        className="closeIcon"
                        onClick={handleClearInput}
                      />
                    </div>

                    <button
                      type="submit"
                      className="sendBtn"
                      onClick={handleSubmit}
                    >
                      <img src={send} alt="search" className="send" />
                    </button>
                  </form>
                  <div>
                    {movies.length > 0 && (
                      <Grid
                        movies={movies}
                        type="movies"
                        className="searchResults"
                      />
                    )}
                  </div>
                </>
              ) : (
                <img
                  src={search}
                  alt="search"
                  className="search"
                  onClick={handleShowInput}
                />
              )}
            </div>{" "}
          </>
        ) : (
          <>
            <div className="cont3">
              <img src={img} alt="logo" className="logo" />
              <button className="signIn">Sign In</button>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
export default NavBar;
