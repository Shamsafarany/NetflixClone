import { useState, useEffect } from "react";
import img from "../assets/icons8-netflix (1).svg";
import "../styles/navBar.css";
import "../Styles/search.css";
import search from "../assets/icons8-search (2).svg";
import send from "../assets/icons8-send-48.png";
import closeIcon from "../assets/icons8-close-50.png";
import Grid from "../Components/Grid";
import { searchMovies } from "../Services/api";
import { Link } from "react-router-dom";

function NavBar({ type = "default" }) {
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
                <Link to="/search" className="li">
                  Search
                </Link>
              </ul>
            </div>
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
